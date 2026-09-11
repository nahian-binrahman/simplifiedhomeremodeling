"use client";

import React, { useState } from "react";
import { LeadRecord } from "@/lib/cms-types";
import {
  Inbox,
  Search,
  Download,
  Phone,
  Mail,
  MapPin,
  Calendar,
  CheckCircle2,
  Clock,
  Filter,
} from "lucide-react";

interface LeadsManagerTabProps {
  leads: LeadRecord[];
  onRefreshLeads: () => Promise<void>;
}

export default function LeadsManagerTab({ leads, onRefreshLeads }: LeadsManagerTabProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [updatingId, setUpdatingId] = useState<string | null>(null);

  const handleStatusChange = async (id: string, newStatus: string) => {
    setUpdatingId(id);
    try {
      const res = await fetch("/api/admin/leads", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, status: newStatus }),
      });
      if (res.ok) {
        await onRefreshLeads();
      }
    } catch (err) {
      alert("Error updating lead status");
    } finally {
      setUpdatingId(null);
    }
  };

  const handleExportCSV = () => {
    if (leads.length === 0) return;

    const headers = ["Date", "Name", "Phone", "Email", "City", "Project Type", "Timeline", "Status", "Details"];
    const rows = leads.map((l) => [
      `"${new Date(l.created_at).toLocaleString()}"`,
      `"${l.full_name}"`,
      `"${l.phone}"`,
      `"${l.email}"`,
      `"${l.city}"`,
      `"${l.project_type}"`,
      `"${l.timeline}"`,
      `"${l.status || "New"}"`,
      `"${(l.project_details || "").replace(/"/g, '""')}"`,
    ]);

    const csvContent = [headers.join(","), ...rows.map((r) => r.join(","))].join("\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", `simplified-leads-${new Date().toISOString().split("T")[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const filtered = leads.filter((lead) => {
    const matchSearch =
      lead.full_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.phone.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.project_type.toLowerCase().includes(searchTerm.toLowerCase());

    const matchStatus =
      statusFilter === "all" || (lead.status || "New").toLowerCase() === statusFilter.toLowerCase();

    return matchSearch && matchStatus;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-neutral-900 border border-neutral-800 p-4 rounded-2xl">
        <div>
          <h2 className="text-lg font-bold text-white tracking-tight">Customer Quote Inquiries</h2>
          <p className="text-xs text-neutral-400">
            View homeowner estimate requests captured from contact forms across the site.
          </p>
        </div>

        <button
          onClick={handleExportCSV}
          disabled={leads.length === 0}
          className="inline-flex items-center gap-2 bg-neutral-800 hover:bg-neutral-700 text-white font-semibold text-xs px-4 py-2.5 rounded-xl border border-neutral-700 transition-colors disabled:opacity-50"
        >
          <Download className="w-3.5 h-3.5 text-amber-400" />
          <span>Export to CSV</span>
        </button>
      </div>

      {/* Filter bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 bg-neutral-900 border border-neutral-800 p-3.5 rounded-2xl">
        <div className="relative w-full sm:w-80">
          <Search className="w-4 h-4 absolute left-3 top-3 text-neutral-500" />
          <input
            type="text"
            placeholder="Search by name, phone, city, or service..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-neutral-950 border border-neutral-800 rounded-xl pl-9 pr-4 py-2 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-amber-500"
          />
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto">
          <span className="text-xs text-neutral-400 font-medium">Status:</span>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="bg-neutral-950 border border-neutral-800 text-white text-xs rounded-xl px-3 py-2 focus:outline-none focus:border-amber-500"
          >
            <option value="all">All Statuses</option>
            <option value="New">New</option>
            <option value="Contacted">Contacted</option>
            <option value="Consultation Scheduled">Consultation Scheduled</option>
            <option value="Completed">Completed</option>
          </select>
        </div>
      </div>

      {/* Table */}
      <div className="bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden">
        {filtered.length === 0 ? (
          <div className="py-12 text-center text-neutral-500 text-xs">
            No customer inquiries found matching your filters.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-neutral-950/80 text-neutral-400 uppercase tracking-wider text-[10px] border-b border-neutral-800">
                <tr>
                  <th className="p-4">Homeowner</th>
                  <th className="p-4">Contact</th>
                  <th className="p-4">Project & City</th>
                  <th className="p-4">Timeline</th>
                  <th className="p-4">Status</th>
                  <th className="p-4">Received</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-800">
                {filtered.map((lead) => {
                  const status = lead.status || "New";
                  return (
                    <tr key={lead.id} className="hover:bg-neutral-850/50 transition-colors">
                      <td className="p-4 font-semibold text-white">
                        <div>{lead.full_name}</div>
                        {lead.project_details && (
                          <div className="text-[11px] text-neutral-400 font-normal mt-1 max-w-xs line-clamp-2">
                            "{lead.project_details}"
                          </div>
                        )}
                      </td>
                      <td className="p-4 space-y-1">
                        <a
                          href={`tel:${lead.phone}`}
                          className="flex items-center gap-1.5 text-amber-400 hover:underline font-semibold"
                        >
                          <Phone className="w-3 h-3" />
                          <span>{lead.phone}</span>
                        </a>
                        <a
                          href={`mailto:${lead.email}`}
                          className="flex items-center gap-1.5 text-neutral-400 hover:text-white"
                        >
                          <Mail className="w-3 h-3" />
                          <span className="truncate max-w-[150px]">{lead.email}</span>
                        </a>
                      </td>
                      <td className="p-4 space-y-1">
                        <span className="inline-block bg-neutral-800 text-white font-medium px-2 py-0.5 rounded text-[11px]">
                          {lead.project_type}
                        </span>
                        <div className="flex items-center gap-1 text-neutral-400 text-[11px]">
                          <MapPin className="w-3 h-3 text-neutral-500" />
                          <span>{lead.city}</span>
                        </div>
                      </td>
                      <td className="p-4 text-neutral-300 font-medium">
                        {lead.timeline}
                      </td>
                      <td className="p-4">
                        <select
                          value={status}
                          disabled={updatingId === lead.id}
                          onChange={(e) => handleStatusChange(lead.id, e.target.value)}
                          className={`text-[11px] font-bold px-2.5 py-1.5 rounded-lg border focus:outline-none cursor-pointer ${
                            status === "New"
                              ? "bg-amber-500/10 text-amber-400 border-amber-500/30"
                              : status === "Contacted"
                              ? "bg-blue-500/10 text-blue-400 border-blue-500/30"
                              : status === "Consultation Scheduled"
                              ? "bg-purple-500/10 text-purple-400 border-purple-500/30"
                              : "bg-emerald-500/10 text-emerald-400 border-emerald-500/30"
                          }`}
                        >
                          <option value="New">New</option>
                          <option value="Contacted">Contacted</option>
                          <option value="Consultation Scheduled">Consultation Scheduled</option>
                          <option value="Completed">Completed</option>
                        </select>
                      </td>
                      <td className="p-4 text-neutral-500 text-[11px] whitespace-nowrap">
                        {new Date(lead.created_at).toLocaleDateString()}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
