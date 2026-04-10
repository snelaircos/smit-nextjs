"use client";

import { useState } from "react";

type Props = { dienst?: string };

export default function OfferteForm({ dienst }: Props) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    naam: "",
    telefoon: "",
    email: "",
    postcode: "",
    dienst: dienst ?? "",
    omschrijving: "",
  });

  function handle(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function submit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: koppel aan e-mail service (Resend / Formspree / etc.)
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
        <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-green-900 mb-2">Aanvraag ontvangen!</h3>
        <p className="text-green-700 text-sm">
          Bedankt voor uw aanvraag. Kevin neemt zo snel mogelijk contact met u op — meestal binnen één werkdag.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="naam" className="block text-sm font-medium text-gray-700 mb-1">
            Naam <span className="text-red-500">*</span>
          </label>
          <input
            id="naam" name="naam" type="text" required
            value={form.naam} onChange={handle}
            placeholder="Uw voor- en achternaam"
            className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1d6fe8] focus:border-transparent"
          />
        </div>
        <div>
          <label htmlFor="telefoon" className="block text-sm font-medium text-gray-700 mb-1">
            Telefoonnummer <span className="text-red-500">*</span>
          </label>
          <input
            id="telefoon" name="telefoon" type="tel" required
            value={form.telefoon} onChange={handle}
            placeholder="06 - xxxxxxxx"
            className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1d6fe8] focus:border-transparent"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            E-mailadres
          </label>
          <input
            id="email" name="email" type="email"
            value={form.email} onChange={handle}
            placeholder="uw@email.nl"
            className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1d6fe8] focus:border-transparent"
          />
        </div>
        <div>
          <label htmlFor="postcode" className="block text-sm font-medium text-gray-700 mb-1">
            Postcode
          </label>
          <input
            id="postcode" name="postcode" type="text"
            value={form.postcode} onChange={handle}
            placeholder="1234 AB"
            className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1d6fe8] focus:border-transparent"
          />
        </div>
      </div>

      {!dienst && (
        <div>
          <label htmlFor="dienst" className="block text-sm font-medium text-gray-700 mb-1">
            Waarvoor wilt u een offerte?
          </label>
          <select
            id="dienst" name="dienst"
            value={form.dienst} onChange={handle}
            className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1d6fe8] focus:border-transparent bg-white"
          >
            <option value="">Selecteer een dienst</option>
            <option value="dakwerk">Dakwerk</option>
            <option value="zinkwerk">Zinkwerk</option>
            <option value="sanitair">Sanitair</option>
            <option value="cv-installatie">CV-installatie</option>
            <option value="gasinstallatie">Gasinstallatie</option>
            <option value="anders">Anders / combinatie</option>
          </select>
        </div>
      )}

      <div>
        <label htmlFor="omschrijving" className="block text-sm font-medium text-gray-700 mb-1">
          Omschrijving van de werkzaamheden <span className="text-red-500">*</span>
        </label>
        <textarea
          id="omschrijving" name="omschrijving" required rows={4}
          value={form.omschrijving} onChange={handle}
          placeholder="Beschrijf kort wat er gedaan moet worden..."
          className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1d6fe8] focus:border-transparent resize-none"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-[#1d6fe8] text-white font-semibold py-3.5 rounded-lg hover:bg-blue-600 transition-colors text-sm"
      >
        Offerte aanvragen →
      </button>
      <p className="text-xs text-gray-400 text-center">
        Vrijblijvend · Geen verplichtingen · Reactie binnen 1 werkdag
      </p>
    </form>
  );
}
