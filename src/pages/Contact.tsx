import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { useForm, ValidationError } from "@formspree/react";
import { useEffect } from "react";

const offices = [
  {
    city: "Abuja",
    type: "Head Office",
    address:
      "Suite 19, Jinifa Plaza, Plot 1014, Samuel Ademulegun Avenue, Central Business District",
    phone: "090 2204 3227",
  },
  {
    city: "Lagos",
    type: "Branch Office",
    address:
      "Plot 6, Block 113, Adebisi Ogunniyi Crescent, off Agungi-Ajiran Road, Lekki-Epe Expressway",
    phone: "080 2269 8070",
  },
  {
    city: "Jos",
    type: "Branch Office",
    address: "No. 3, Constitutional Hill Road, Jos, Plateau State",
    phone: "090 2204 3227",
  },
];

const Contact = () => {
  const { toast } = useToast();
  const [state, handleSubmit] = useForm("xqebqwyo");
  useEffect(() => {
    if (state.succeeded) {
      toast({
        title: "Message Sent!",
        description:
          "Thank you for contacting us. We'll get back to you shortly.",
      });
    }
    if (state.errors) {
      toast({
        title: "Error!",
        description: `Please check your form for errors. ${state.errors}`,
      });
    }
  }, [state.succeeded, toast]);

  // if (state.succeeded) {
  //   toast({
  //     title: "Message Sent!",
  //     description:
  //       "Thank you for contacting us. We'll get back to you shortly.",
  //   });
  // }

  return (
    <Layout>
      <SEO
        title="Contact Us"
        description="Get in touch with O.A. Kolawole & Co. for professional legal consultation. Offices in Abuja, Lagos, and Jos."
        canonicalUrl="/contact"
      />

      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-navy-gradient overflow-hidden">
        <div className="container-custom">
          <h1 className="font-playfair text-5xl text-white font-semibold">
            Contact Us
          </h1>
          <p className="text-white/70 mt-4 text-lg">
            Reach out to schedule a consultation or learn how we can assist you.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="section-padding bg-background">
        <div className="container-custom grid lg:grid-cols-5 gap-12">
          {/* Form */}
          <div className="lg:col-span-3">
            <h2 className="font-playfair text-3xl font-semibold mb-6">
              Send Us a Message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <Input name="name" placeholder="Full Name *" required />
                <Input
                  name="email"
                  type="email"
                  placeholder="Email Address *"
                  required
                />
              </div>

              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />

              <div className="grid sm:grid-cols-2 gap-6">
                <Input name="phone" placeholder="Phone Number" />
                <Input name="subject" placeholder="Subject *" required />
              </div>

              <Textarea
                name="message"
                placeholder="Tell us about your legal matter..."
                required
                className="min-h-[150px]"
              />

              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />

              <p className="text-sm text-muted-foreground">
                Submitting this form does not create a lawyer-client
                relationship. Please do not include confidential information.
              </p>

              <Button
                type="submit"
                disabled={state.submitting}
                className="bg-accent text-accent-foreground"
              >
                {state.submitting ? "Sending..." : "Send Message"}
                <Send size={16} className="ml-2" />
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="p-6 bg-secondary rounded-xl">
              <div className="flex gap-3 items-center">
                <Mail className="text-accent" />
                <a href="mailto:info@oakolawoleandco.com">
                  info@oakolawoleandco.com
                </a>
              </div>
              <div className="flex gap-3 items-center mt-4">
                <Phone className="text-accent" />
                <a href="tel:09022043227">090 2204 3227</a>
              </div>
              <div className="flex gap-3 items-center mt-4">
                <Clock className="text-accent" />
                Mon – Fri: 9:00 AM – 5:00 PM
              </div>
            </div>

            <div className="space-y-4">
              {offices.map((office) => (
                <div
                  key={office.city}
                  className="p-4 bg-card border rounded-xl"
                >
                  <p className="font-medium">
                    {office.city}{" "}
                    <span className="text-accent text-sm">({office.type})</span>
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    {office.address}
                  </p>
                  <a
                    href={`tel:${office.phone.replace(/\s/g, "")}`}
                    className="text-accent text-sm font-medium mt-2 inline-block"
                  >
                    {office.phone}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Map Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="h-[400px] bg-secondary container-custom p-0 mt-10"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.9985451!2d7.4897!3d9.0579!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwMDMnMjguNCJOIDfCsDI5JzIyLjkiRQ!5e0!3m2!1sen!2sng!4v1"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Office Location Map"
          />
        </motion.section>
      </section>
    </Layout>
  );
};

export default Contact;
