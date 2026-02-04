import { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';
import CTAButton from '@/components/CTAButton';

export const metadata: Metadata = {
  title: 'Contact Us | Hellenic Estates | Greek Golden Visa Specialists',
  description: 'Get in touch with Hellenic Estates for Greek Golden Visa property investment inquiries. Book a free consultation or send us a message.',
};

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-med-blue text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-serif text-5xl font-bold mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-blue-100">
              Ready to start your Golden Visa journey? Get in touch with our team for a free consultation.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <h2 className="font-serif text-3xl font-bold text-gray-900 mb-6">
                Send Us a Message
              </h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and one of our Golden Visa specialists will get back to you within 24 hours.
              </p>
              <ContactForm source="contact-page" />
            </div>

            {/* Contact Info Sidebar */}
            <div className="lg:col-span-1">
              <div className="space-y-8">
                {/* Direct Contact */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-serif text-xl font-semibold text-gray-900">
                      Direct Contact
                    </h3>
                    <span className="bg-med-blue text-white text-xs px-2 py-1 rounded">
                      US Representative
                    </span>
                  </div>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-med-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <div>
                        <div className="font-medium text-gray-900">Email</div>
                        <a href="mailto:info@hellenicestates.com" className="text-med-blue hover:underline">
                          info@hellenicestates.com
                        </a>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-med-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <div>
                        <div className="font-medium text-gray-900">Phone</div>
                        <a href="tel:+302101234567" className="text-med-blue hover:underline">
                          +30 210 123 4567
                        </a>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-med-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <div>
                        <div className="font-medium text-gray-900">Office</div>
                        <span className="text-gray-600">
                          Kallithea, Athens<br />
                          Greece 17671
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>

                {/* WhatsApp */}
                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <h3 className="font-serif text-xl font-semibold text-gray-900 mb-4">
                    Chat on WhatsApp
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Prefer instant messaging? Reach us directly on WhatsApp for quick responses.
                  </p>
                  <CTAButton
                    href="https://wa.me/302101234567"
                    variant="whatsapp"
                    external
                    className="w-full"
                  >
                    Open WhatsApp
                  </CTAButton>
                </div>

                {/* Book a Call */}
                <div className="bg-med-blue text-white rounded-lg p-6">
                  <h3 className="font-serif text-xl font-semibold mb-4">
                    Book a Video Call
                  </h3>
                  <p className="text-blue-100 mb-4">
                    Schedule a free 30-minute consultation with one of our Golden Visa specialists.
                  </p>
                  {/* Calendly placeholder */}
                  <div className="bg-white/10 rounded-lg p-4 text-center">
                    <p className="text-blue-100 text-sm mb-3">
                      Calendly integration placeholder
                    </p>
                    <a
                      href="https://calendly.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-white text-med-blue px-6 py-3 font-medium rounded hover:bg-gray-100 transition-colors"
                    >
                      Select a Time
                    </a>
                  </div>
                </div>

                {/* Office Hours */}
                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="font-serif text-xl font-semibold text-gray-900 mb-4">
                    Office Hours
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span className="font-medium text-gray-900">9:00 - 18:00</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Saturday</span>
                      <span className="font-medium text-gray-900">10:00 - 14:00</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Sunday</span>
                      <span className="text-gray-500">Closed</span>
                    </li>
                  </ul>
                  <p className="text-sm text-gray-500 mt-4">
                    All times are in Athens time (EET/EEST)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-gray-900 mb-4">
              Visit Our Office
            </h2>
            <p className="text-gray-600">
              Located in the heart of Kallithea, easily accessible by metro.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25186.03574667963!2d23.69121!3d37.95091!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a1bb8466b6f1c9%3A0x400bd2ce2b97a20!2sKallithea%2C%20Greece!5e0!3m2!1sen!2sus!4v1699000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-2xl font-bold text-gray-900 mb-4">
              Trusted by Investors From
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-8 text-gray-500">
            {['United States', 'United Kingdom', 'China', 'Russia', 'UAE', 'India', 'Turkey', 'Brazil'].map((country) => (
              <span key={country} className="px-4 py-2 bg-gray-100 rounded-full text-sm">
                {country}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
