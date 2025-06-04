import Image from 'next/image'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-faqs.jpg'

const faqs = [
  [
    {
      question: 'Does Poseidon work without cell service or Wi-Fi?',
      answer:
        'Absolutely. Poseidon caches every tap, photo, and signature. The moment the device reconnects, all data syncs automatically.',
    },
    {
      question: 'Can I create work orders on the fly?',
      answer: 'Yes. From any inspection or install screen, hit “Add Work Order,” snap photos, and it’s instantly logged for dispatch.',
    },
    {
      question: 'How long does deployment take?',
      answer:
        'Most teams are live in under a week. Import your jobs, add users, and you’re rolling—no custom dev required.',
    },
  ],
  [
    {
      question: 'Do you integrate with our existing ERP or CRM?',
      answer:
        'We offer out-of-the-box REST and Zapier connectors. Need something custom? Our API and webhooks make it straightforward.',
    },
    {
      question:
        'What devices are supported?',
      answer:
        'Any modern iOS or Android phone/tablet running version 12 or later. Web dashboards work in Chrome, Edge, and Safari.',
    },
    {
      question:
        'Is our data secure?',
      answer:
        'All traffic is encrypted end-to-end with TLS 1.3. Data rests in SOC 2-certified, geographically redundant cloud regions.',
    },
  ],
  [
    {
      question: 'How is pricing structured?',
      answer:
        'Simple per-user, per-month plan—unlimited jobs, forms, and storage. No setup or hidden fees.',
    },
    {
      question: 'Can I cancel anytime?',
      answer: 'Yes. Cancel in the admin portal or email us—your data exports are available for 30 days after termination.',
    },
    {
      question: 'I lost my password, how do I get into my account?',
      answer:
        'Send us an email and we will send you a copy of our latest password spreadsheet so you can find your information.',
    },
  ],
]

export function Faqs() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative overflow-hidden bg-slate-50 py-20 sm:py-32"
    >
      <Image
        className="absolute top-0 left-1/2 max-w-none translate-x-[-30%] -translate-y-1/4"
        src={backgroundImage}
        alt=""
        width={1558}
        height={946}
        unoptimized
      />
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faq-title"
            className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl"
          >
            Frequently asked questions
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            Can’t find the answer you need? Email our support team and a real human will get back to you—usually within one business day.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-8">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="font-display text-lg/7 text-slate-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-slate-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
