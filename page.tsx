'use client';

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Mail, MapPin, Phone, Sparkles, Users, LineChart, BookOpen, Handshake, Palette, Globe2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const services = [
  { icon: LineChart, title: "Strateško i projektno savjetovanje", text: "Razvoj projektnih ideja, logičkih okvira, strategija, akcionih planova, izvještaja i evaluacijskih alata." },
  { icon: Users, title: "Facilitacija i razvoj zajednica", text: "Dizajn i vođenje radionica, konsultacija, dijaloških platformi, participativnih procesa i timskih susreta." },
  { icon: BookOpen, title: "Edukacije i mentorstvo", text: "Praktične obuke iz oblasti liderstva, rada sa mladima, društvene kohezije, komunikacije i razvoja organizacija." },
  { icon: Handshake, title: "Partnerstva i umrežavanje", text: "Podrška organizacijama u razvoju saradnje, povezivanju aktera i izgradnji održivih modela zajedničkog djelovanja." },
  { icon: Palette, title: "Kultura, kreativnost i naslijeđe", text: "Koncepti kulturnih programa, folklornih i umjetničkih inicijativa, promocija tradicije i kreativnih pristupa učenju." },
  { icon: Globe2, title: "Komunikacije i vidljivost", text: "Razvoj sadržaja, narativa, kampanja, prezentacija, publikacija i komunikacijskih materijala." }
];

const values = ["Praktičnost i jasnoća", "Participativni pristup", "Društvena odgovornost", "Kreativnost u rješavanju problema", "Razvoj ljudi i zajednica", "Ideje koje pokreću promjene"];

const projectAreas = [
  "Razvoj projektnih prijedloga i grant aplikacija",
  "Strateško planiranje za organizacije i mreže",
  "Facilitacija radionica i konsultativnih procesa",
  "Edukacije za mlade, lidere i organizacije civilnog društva",
  "Podrška kulturnim i umjetničkim programima",
  "Izrada priručnika, izvještaja, analiza i publikacija"
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f7f8f6] text-zinc-900">
      <header className="sticky top-0 z-50 border-b border-zinc-200 bg-[#f7f8f6]/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#77a36f] text-white shadow-sm">
              <Sparkles size={22} />
            </div>
            <div>
              <div className="text-xl font-semibold tracking-tight">Transforma</div>
              <div className="text-xs uppercase tracking-[0.22em] text-[#77a36f]">Consulting</div>
            </div>
          </div>
          <nav className="hidden items-center gap-7 text-sm text-zinc-700 md:flex">
            <a href="#o-nama" className="hover:text-[#77a36f]">O nama</a>
            <a href="#usluge" className="hover:text-[#77a36f]">Usluge</a>
            <a href="#pristup" className="hover:text-[#77a36f]">Pristup</a>
            <a href="#kontakt" className="hover:text-[#77a36f]">Kontakt</a>
          </nav>
          <a href="#kontakt" className="hidden md:block">
            <Button className="rounded-2xl bg-[#77a36f] text-white hover:bg-[#668d5f]">Zakaži konsultaciju</Button>
          </a>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden px-5 py-20 md:py-28">
          <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[#77a36f]/15 blur-3xl" />
          <div className="absolute -bottom-32 -left-24 h-96 w-96 rounded-full bg-zinc-300/30 blur-3xl" />
          <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-[1.1fr_0.9fr]">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="mb-5 inline-flex rounded-full border border-[#77a36f]/30 bg-white px-4 py-2 text-sm text-[#5d8256] shadow-sm">Savjetovanje, razvoj i kreativna transformacija</div>
              <h1 className="max-w-4xl text-5xl font-semibold leading-tight tracking-tight md:text-7xl">Ideje i pristupi koji pokreću promjene.</h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-700">Transforma Consulting pomaže organizacijama, institucijama i zajednicama da razviju jasne ideje, kvalitetne projekte, snažna partnerstva i procese koji donose stvarnu promjenu.</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href="#usluge"><Button className="rounded-2xl bg-[#77a36f] px-6 py-6 text-white hover:bg-[#668d5f]">Pogledaj usluge <ArrowRight className="ml-2" size={18} /></Button></a>
                <a href="#kontakt"><Button variant="outline" className="rounded-2xl border-zinc-300 bg-white px-6 py-6">Kontaktiraj nas</Button></a>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.1 }}>
              <Card className="rounded-[2rem] border-zinc-200 bg-white/90 shadow-xl">
                <CardContent className="p-8">
                  <div className="mb-6 flex items-center justify-between">
                    <div>
                      <div className="text-sm text-zinc-500">Transforma model</div>
                      <div className="text-2xl font-semibold">Od ideje do promjene</div>
                    </div>
                    <div className="rounded-2xl bg-[#77a36f]/15 p-3 text-[#77a36f]"><Sparkles /></div>
                  </div>
                  <div className="space-y-4">
                    {["Razumijevanje potreba", "Dizajn rješenja", "Mobilizacija ljudi", "Provedba i učenje", "Održiva promjena"].map((item, index) => (
                      <div key={item} className="flex items-center gap-4 rounded-2xl bg-[#f7f8f6] p-4">
                        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-sm font-semibold text-[#77a36f] shadow-sm">{index + 1}</div>
                        <span className="font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        <section id="o-nama" className="px-5 py-16">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr]">
              <div>
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-[#77a36f]">O nama</p>
                <h2 className="text-4xl font-semibold tracking-tight">Prostor za ideje koje se pretvaraju u djelovanje.</h2>
              </div>
              <div className="text-lg leading-8 text-zinc-700">
                <p>Transforma Consulting je savjetodavni i kreativni studio usmjeren na razvoj projekata, organizacija, zajednica i ljudi. Naš rad povezuje strateško razmišljanje, praktično iskustvo, participativne metode i komunikaciju koja pokreće povjerenje i saradnju.</p>
                <p className="mt-5">Posebno radimo u oblastima razvoja zajednica, rada sa mladima, kulture, obrazovanja, društvene kohezije, kreativnih procesa, organizacijskog razvoja i vidljivosti projekata.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="usluge" className="px-5 py-16">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 max-w-3xl">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-[#77a36f]">Usluge</p>
              <h2 className="text-4xl font-semibold tracking-tight">Šta Transforma radi?</h2>
              <p className="mt-4 text-lg leading-8 text-zinc-700">Kombinujemo savjetovanje, facilitaciju, edukaciju, pisanje i dizajn procesa, od prve ideje do konkretnih rezultata.</p>
            </div>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <Card key={service.title} className="rounded-3xl border-zinc-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                    <CardContent className="p-6">
                      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#77a36f]/15 text-[#77a36f]"><Icon size={23} /></div>
                      <h3 className="mb-3 text-xl font-semibold">{service.title}</h3>
                      <p className="leading-7 text-zinc-600">{service.text}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        <section id="pristup" className="px-5 py-16">
          <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2">
            <Card className="rounded-[2rem] border-zinc-200 bg-white shadow-sm">
              <CardContent className="p-8">
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-[#77a36f]">Pristup</p>
                <h2 className="mb-6 text-3xl font-semibold tracking-tight">Naše vrijednosti</h2>
                <div className="grid gap-3">
                  {values.map((value) => (
                    <div key={value} className="flex items-center gap-3 rounded-2xl bg-[#f7f8f6] p-4">
                      <CheckCircle2 className="text-[#77a36f]" size={20} />
                      <span className="font-medium">{value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-[2rem] border-zinc-200 bg-[#1f241f] text-white shadow-sm">
              <CardContent className="p-8">
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-[#a7c8a0]">Oblasti rada</p>
                <h2 className="mb-6 text-3xl font-semibold tracking-tight">Gdje možemo pomoći?</h2>
                <div className="space-y-3">
                  {projectAreas.map((area) => <div key={area} className="rounded-2xl bg-white/10 p-4 text-white/90">{area}</div>)}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="px-5 py-16">
          <div className="mx-auto max-w-7xl rounded-[2rem] bg-[#77a36f] p-8 text-white shadow-xl md:p-12">
            <div className="grid items-center gap-8 md:grid-cols-[1fr_auto]">
              <div>
                <h2 className="text-4xl font-semibold tracking-tight">Imaš ideju koju želiš pretvoriti u projekat?</h2>
                <p className="mt-4 max-w-3xl text-lg leading-8 text-white/90">Zajedno možemo oblikovati koncept, razviti partnerstva, napisati projektni prijedlog, osmisliti radionicu ili kreirati proces koji uključuje ljude i pokreće promjenu.</p>
              </div>
              <a href="#kontakt"><Button className="rounded-2xl bg-white px-6 py-6 text-[#5d8256] hover:bg-zinc-100">Pošalji upit <ArrowRight className="ml-2" size={18} /></Button></a>
            </div>
          </div>
        </section>

        <section id="kontakt" className="px-5 py-16">
          <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-[#77a36f]">Kontakt</p>
              <h2 className="text-4xl font-semibold tracking-tight">Razgovarajmo o tvojoj ideji.</h2>
              <p className="mt-4 text-lg leading-8 text-zinc-700">Za konsultacije, projektne ideje, edukacije, radionice ili saradnju, pošaljite kratku poruku sa osnovnim informacijama.</p>
              <div className="mt-8 space-y-4 text-zinc-700">
                <div className="flex items-center gap-3"><Mail className="text-[#77a36f]" size={20} /> info@transforma.ba</div>
                <div className="flex items-center gap-3"><Phone className="text-[#77a36f]" size={20} /> +387 00 000 000</div>
                <div className="flex items-center gap-3"><MapPin className="text-[#77a36f]" size={20} /> Sarajevo, Bosna i Hercegovina</div>
              </div>
            </div>
            <Card className="rounded-[2rem] border-zinc-200 bg-white shadow-sm">
              <CardContent className="p-8">
                <form action="https://formspree.io/f/REPLACE_ME" method="POST" className="grid gap-4">
                  <input name="name" className="rounded-2xl border border-zinc-200 bg-[#f7f8f6] px-4 py-4 outline-none focus:border-[#77a36f]" placeholder="Ime i prezime" required />
                  <input name="email" type="email" className="rounded-2xl border border-zinc-200 bg-[#f7f8f6] px-4 py-4 outline-none focus:border-[#77a36f]" placeholder="E-mail" required />
                  <input name="subject" className="rounded-2xl border border-zinc-200 bg-[#f7f8f6] px-4 py-4 outline-none focus:border-[#77a36f]" placeholder="Tema saradnje" />
                  <textarea name="message" className="min-h-36 rounded-2xl border border-zinc-200 bg-[#f7f8f6] px-4 py-4 outline-none focus:border-[#77a36f]" placeholder="Kratko opiši ideju, potrebu ili pitanje" required />
                  <Button type="submit" className="rounded-2xl bg-[#77a36f] py-6 text-white hover:bg-[#668d5f]">Pošalji poruku</Button>
                </form>
                <p className="mt-4 text-sm text-zinc-500">Napomena: za funkcionalnu kontakt formu zamijeni REPLACE_ME svojim Formspree ID-em.</p>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <footer className="border-t border-zinc-200 px-5 py-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-sm text-zinc-600 md:flex-row">
          <div>© 2026 Transforma Consulting. Sva prava zadržana.</div>
          <div>Ideje i pristupi koji pokreću promjene.</div>
        </div>
      </footer>
    </div>
  );
}
