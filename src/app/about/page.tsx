"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
  return (
    <div className="pt-20 bg-gray-50 min-h-screen text-gray-800">
      {/* Services Section */}
      <section id="services" className="py-16 px-6 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-semibold text-center mb-12">Our Services</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Web Development", desc: "Modern, scalable, and secure websites." },
              { title: "UI/UX Design", desc: "Clean, user-focused design for engagement." },
              { title: "Consulting", desc: "Helping businesses make smart tech decisions." },
            ].map((service, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{service.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6 bg-white">
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="text-3xl font-semibold mb-4">Get in Touch</h3>
          <p className="text-gray-600 mb-8">
            Interested in working together or want to learn more? Reach out below.
          </p>
          <form className="space-y-4 text-left">
            <Input type="text" placeholder="Your Name" />
            <Input type="email" placeholder="Your Email" />
            <Textarea placeholder="Your Message" className="h-32" />
            <Button type="submit" className="w-full">
              Send Message
            </Button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-200 text-center text-sm py-6 mt-10">
        © {new Date().getFullYear()} Your Name. All rights reserved.
      </footer>
    </div>
  );
}
