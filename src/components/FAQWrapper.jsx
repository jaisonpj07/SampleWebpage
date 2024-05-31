import FAQ from "./FAQ"

const FAQWrapper = () => {
  const faqData = [
    {
      image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmymodernmet.com%2Fwp%2Fwp-content%2Fuploads%2F2019%2F09%2F100k-ai-faces-3-150x150.jpg&f=1&nofb=1&ipt=15bcdbf1e3a88549c8fe37ddb14e7152af0121449983a9f5f6971530fb0be16e&ipo=images",
      question: "What are the key principles of coding?",
      responses: "12",
      by: "Jishnu Ambadi",
    },
    {
      image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.-zf2WVw_qKTDQBdP9OQV5AAAAA%26pid%3DApi&f=1&ipt=172d375b967f9d197ac6fd87937f761d92d1cf65909f0a9422b5bfbc7db9a844&ipo=images",
      question: "How does guide facilitates accurate medical billing?",
      responses: "24",
      by: "Sreelakshmi",
    },
    {
      image:
        "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.dwaynelamb.com%2Fimages%2FDLambPeopleImage2.jpg&f=1&nofb=1&ipt=1cb5db27a8871a5f6adccd53d67b9bd8d7158d7fe2a998da46e4d9b5b3ad6acc&ipo=images",
      question: "Where are the major Sections within this guide?",
      responses: "7",
      by: "Athul",
    },
    {
      image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pwc.co.uk%2Fpeople%2Fphotos%2Fstuart-newman.jpg.pwcimage.105.105.jpg&f=1&nofb=1&ipt=c3d811ac85664021aa595498ba4e24d0951a2745efc7edca70ab93649c78cd4b&ipo=images",
      question: "How often is the guide updated?",
      responses: "2",
      by: "Becca",
    },
    {
      image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.tL1dKiGcEl_zmAltMAiCDQHaHa%26pid%3DApi&f=1&ipt=46a7041230ad0b7328b31dbb87a98f784a3d5178d0452927416fa2c36e61d071&ipo=images",
      question: "What is the purpose of modifiers in coding?",
      responses: "31",
      by: "Midhun",
    },
    {
      image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthebluegrasssituation.com%2Fwp-content%2Fuploads%2F2020%2F08%2Fre-perez-branding-for-the-people-square-headshot.jpg&f=1&nofb=1&ipt=329555202f30dfefa5e29b36848c85e122fb6299f3cd3aa32a33a28e8f6c507d&ipo=images",
      question: "What are the difference between ICD and Code?",
      responses: "0",
      by: "Amal Thomas",
    },
    {
      image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fhkmdb.com%2Fdb%2Fimages%2Fpeople%2F13284%2FChoiWang-25-t.jpg&f=1&nofb=1&ipt=4572f1ae539c39ee1a19dfe7fe2e70f64e033beddef3435c2c6db4a70f1270e1&ipo=images",
      question: "What is the significance of level II in CPT?",
      responses: "12",
      by: "Jishnu Ambadi",
    },
  ]

  return (
    <>
      {faqData.map((faq, index) => (
        <FAQ
          key={index}
          image={faq.image}
          question={faq.question}
          responses={faq.responses}
          by={faq.by}
        />
      ))}

      <button className='px-4 py-2 border border-1 border-black rounded-full uppercase mt-6'>
        Load More
      </button>
    </>
  )
}

export default FAQWrapper
