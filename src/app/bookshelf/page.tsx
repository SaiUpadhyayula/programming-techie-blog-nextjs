import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({
  title,
  href,
  children,
}: {
  title: string
  href?: string
  children: React.ReactNode
}) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export const metadata = {
  title: 'Book Shelf',
  description: 'Here are the list of books I have read covering a wide range of topics like Software Development, Non Fiction, Fiction, Stock Market Investing, Trading',
}

export default function Uses() {
  return (
    <SimpleLayout
      title="Here are some books I read and also recommend reading."
      intro="This list contains mainly the book I read and also recommend to read not only in the category of Software Engineering, but also in another categories like Non-Fiction (Self Development, Productivity, Entrepreneurship, etc.), Stock Market Investing, feel free to check them out if you are interested."
    >
      <div className="space-y-20">
        <ToolsSection title="Software Engineering">
          <Tool title="Head First Java" 
          href="https://www.amazon.com/Head-First-Java-Brain-Friendly-Guide/dp/1491910771/ref=sr_1_1?crid=3M0PYJHCKST8P&dib=eyJ2IjoiMSJ9.LX7EViG7xXboNfA5NuuPCnqAg9Ido50G7dEqoZVx_j7OtqxpbAZAKvhtlH4Ds72EqhAIuSdG4OeplTIKzDd5BnloE8xmcRbLBngC8mCQEYhFfADKUe8GeWS4hgHaNGbFjPDd6YXI0w_jj5KjgG6YBKWp_FG9Rhgm04qlnOMeCOXjeQEBqGJmD-WSWjfQDc1-dyL02fXlkdFNTVUUw_VH1hwZFWVTitimPtCRxjx9RCk.C1uLsqBHyAPHnKrTAbIjh4J7e4cBvSEVLmV3NGLu3pk&dib_tag=se&keywords=head+first+java&qid=1722355157&s=books&sprefix=Head+First+Java%2Cstripbooks-intl-ship%2C179&sr=1-1">
             Head First Java
          </Tool>
          <Tool title="Clean Code"
          href="https://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882/ref=sr_1_1?crid=DITH1PCED3IJ&dib=eyJ2IjoiMSJ9.eUeDq4BPqNYI52SOU-OcJxFxSsYuG75qnwKh2Q1vEf2RPgQp_SsISCnxR9XvBj4k0bwFAdrWX4QvnuOBAKOK7vehMb3OjkBOzCkHPoPEezrCRwY6ocZeZeHF3bPtxu4VmEbC9BTXVgCyElEX57lj7o00wLkno1ltPKxuggV0srib7l_KIBPbakajiHqk1D36PuP0o6zddgqEHyX_n1D2714IAWfatVilgrBJEpae1pA.zDVIEK1DRhbHKtT1OOzn-FGkif7B3zfTn7RwjhgEZlI&dib_tag=se&keywords=clean+code&qid=1722355239&s=books&sprefix=Clean+Code%2Cstripbooks-intl-ship%2C198&sr=1-1">
            Clean Code
          </Tool>
          <Tool title="Effective Java"
          href="https://www.amazon.com/Effective-Java-Joshua-Bloch/dp/0134685997/ref=sr_1_1?crid=2EEH8JV4T5WG3&dib=eyJ2IjoiMSJ9.kHI5R9ntMKF1bQNHNSU8QnPhv59poJSou4x6gNCtwEY-zF-tfmvxzknedfsVBwwsXJktdy7MROcEb9ZeN9l7YIM2oxGEQ_ePUPmImTzyodW34_k81WgR6IjkdW6SbqvZsXj4eYkB2i81hrYRUFMQIw.OYLwT5Al2bNKGLAFrvFtSWv9OMLvNFqe1-EipCA-_nM&dib_tag=se&keywords=effective+java+3rd+edition&qid=1722355361&s=books&sprefix=Effective+Java%2Cstripbooks-intl-ship%2C167&sr=1-1">
            Effective Java
          </Tool>
          <Tool title="Head First Design Patterns"
          href="https://www.amazon.com/Head-First-Design-Patterns-Object-Oriented/dp/149207800X/ref=sr_1_1?crid=14A51AD546OBU&dib=eyJ2IjoiMSJ9.KueZMlNMlxnKpiJVz_jRt4V6hzrk0qD8tiUpkGp0oOcBT8zzc6XUI36P-aeQ7yywx8fI5Gca-qa26yVZFTjrgiqKulqG0zxnJB2i-HKFmh4uJKAVFEJoCCUjgRKVkU245GcRs8wHSK8u8E6xZE-bT-16ZRyqrk0kK6py0XAx7RHua2w3o3B-5_7Xtjb7i-sqpSXl71wiTVwHwRaVvnqrJJO04LSz1Hq6EgK23D5-6P8.CeePK1a9WmjtxOvAQyLMOwidFt9vO6eBBQCWIX0tiME&dib_tag=se&keywords=head+first+design+patterns&qid=1722355710&s=books&sprefix=Head+First+De%2Cstripbooks-intl-ship%2C213&sr=1-1">
            Head First Design Patterns
          </Tool>
          <Tool title="Java Concurrency in Practice"
          href="https://www.amazon.com/Java-Concurrency-Practice-Brian-Goetz/dp/0321349601/ref=sr_1_1?crid=2TEIEBEJHGYJT&dib=eyJ2IjoiMSJ9.VxCKZ9ltZYmTTEGMgU7rC2ahxWt1iUHF8jYxZcetGKeY1qEbwRVQwVYexHtbZgz6oWmZwGkSmEImtAxwsykRxI85zJR8mc4TSl2TICxG8gTq3bLh7NLgSAfl1rtCGUADQHOQYxa66ytmFI_91noWshE3POGka05dqTqQ8D6lTJxTtw7UmJaNxpvjKnaf69vJRj-6RvusTudo7D-O4Hge7Jvd0MSmNoxOLeh8eSOUBFw.0sP6eda6MSfv0p4Ol_KeYyMz77at2CshEUdoiIeINAw&dib_tag=se&keywords=java+concurrency+in+practice&qid=1722355741&s=books&sprefix=Java+Concurrency+in+Practice%2Cstripbooks-intl-ship%2C245&sr=1-1">
            Java Concurrency in Practice
          </Tool>
          <Tool title="Spring Start Here"
          href="https://www.amazon.com/Spring-Start-Here-Learn-learn/dp/1617298697/ref=sr_1_1?crid=14ATMY9NTHF0N&dib=eyJ2IjoiMSJ9.4-HcVCcaMUZFdsblg0uThybwB8Ia9jlncgEDk9Q7propfpk5IE1g04eXlctT1OI3QYWmmnH4IrrTQtwXBT7uyQsSXFPd3Gr8sefdHn8w4LFrWw8Wf7Jhx72gt51MC9Ew0Vw9yX75JRp5n_0hEGAgAa_L75-7kA_lg46deNpiqN4eot3HGPKA60DIvIudf5n2hDiv_p8x0dwf8aGM1BF9x1sn9PC2UL3r40QNPk_rIj8.5sDD8R6o-QTVCYmJTEVRlJKwL9xHrs5MO8f9WNFh2fc&dib_tag=se&keywords=spring+start+here&qid=1722355762&s=books&sprefix=Spring+Start+Here%2Cstripbooks-intl-ship%2C170&sr=1-1">
            Spring Start Here
          </Tool>
          <Tool title="Beginning Spring Boot 3"
          href="https://www.amazon.com/Beginning-Spring-Boot-Cloud-Native-Microservices/dp/1484287916/ref=sr_1_1?crid=3LRQDM1A3WRDX&dib=eyJ2IjoiMSJ9.GPxzRc2oVRTjZFGF4FLxmGlSc4HChtsPe2ofAfsq3cfcoMPJEOudYw8e-qxw9CxzYfXDav4VPCv_-lyfedvS2S37r1ULPUpvU5--CbJWJb_A1mbmbWAod1j4dzTT9OdJ.QB0N4mQl6rtUvWIjyniWfwSzxXviwTqzgSl40iQYTPk&dib_tag=se&keywords=beginning+spring+boot+3&qid=1722355800&s=books&sprefix=beginning+spring+boot+3%2Cstripbooks-intl-ship%2C168&sr=1-1">
            Beginning Spring Boot 3
          </Tool>
          <Tool title="Building Microservices"
          href="https://www.amazon.com/Building-Microservices-Designing-Fine-Grained-Systems/dp/1492034029/ref=sr_1_1?crid=2ZUQDV1YY7B8N&dib=eyJ2IjoiMSJ9.ACNGezS5dr_IXx94___yxHr7QJE-kBwDXAGWi2NOM1AnJZfaJs6A_AOw0myJpUF_3lIYWYFUXj0S_3zqFA1cQlsgY4PnVmE8WJJVHxLaaTA5g0PUEvuJJ-Os6WH7nxNrjCenPWOWrpZAxT49ql6OcYGJCrY9zzXO_2vcjSf1W8oMj3gvP0mACDssUKso-lAr2-LpPoD6wG-wr4ZQ_Y_udz61FK-ftYJ0VSVudz-p_4s.Pak1wJh2TGuz3P8ONwWO7IDqPsKQEptfjow-w9Cg8RE&dib_tag=se&keywords=microservices&qid=1722355829&s=books&sprefix=Microservices%2Cstripbooks-intl-ship%2C201&sr=1-1">
            Building Microservices
          </Tool>
          <Tool title="Kafka: The Definitive Guide"
          href="https://www.amazon.com/Kafka-Definitive-Real-Time-Stream-Processing/dp/1492043087/ref=sr_1_1?crid=3TT0WQ04JBNWI&dib=eyJ2IjoiMSJ9.P4vWMD_YDS5RuY8TUbCaKDhmdqWQA8jot1JuV_0QsPoYSP47ZGtjtAutcz2RaPIy6Qt5jW8EKsnZxQ7nc8EKXAhJOCMi8a2ySL-Vd6aOmmDw1bn13IljHaxLvUQvJu_rp4z4Uv8d-ueCXvEF4rRdpLWJgjrKdRBAhLfV5OYFNBe9V1V6s-r7TvkqW0v8_0mcniPtC9GMY1lvRvrl0c7pxtpx486Y5g8PRimHZsGW1j0.Sx0hyi8pJEgKeA5pcLDX5h_WDq35G6Lhrl5KOrL2-n8&dib_tag=se&keywords=apache+kafka&qid=1722355855&s=books&sprefix=Apache+Kafka%2Cstripbooks-intl-ship%2C197&sr=1-1">
            Kafka: The Definitive Guide
          </Tool>
          <Tool title="Cloud Native Spring in Action"
          href="https://www.amazon.com/Native-Spring-Action-Thomas-Vitale/dp/1617298425/ref=sr_1_1?crid=3LG3ODF2X0V13&dib=eyJ2IjoiMSJ9.3CKe-OGZXCc4Es7I1TIuOjBQ5lVyuTtTNGoL6HjdFnE-TyzzQgH-FLk0REB7e7Wl8vQyP9cr_1X6_7QlxgbInuRHDX7dqnkvXVAvizgPVEmpSIAQNgpwA6iHD7uLUn7vKWcMW0PKf-e79yrrMTNWdnIM3987au7EQaPeJEhojh83QfQcHOU8wxrZ3CyXVLF8Q-cyT95eFNJGvyj4X0o7to5o9ks0bgcjHe2h6d7kCCY.yOMDBJx3F8j8pE00EM0pMqHjmd-eqZqZDPgR7XS1Xv0&dib_tag=se&keywords=cloud+native+spring&qid=1722355884&s=books&sprefix=Cloud+Native+Spring%2Cstripbooks-intl-ship%2C174&sr=1-1">
            Cloud Native Spring in Action
          </Tool>
          <Tool title="Microservices with Spring Boot 3 and Spring Cloud"
          href="https://www.amazon.com/Microservices-Spring-Boot-Cloud-microservices/dp/1805128698/ref=sr_1_1?crid=3S2RO674M2SU5&dib=eyJ2IjoiMSJ9.SNJaOO3-YVI5gXgeP05mJ6G0-Aq7JU6J7rBpFZecRsbJV4jtQaGUl_KROO74dyGKoFFTM4Jz6BKnYAGrjwGHw2JgsAEEHIaTIQp0KuLkhOFgMPAxHMSMtn7aHt5sPghcX3_Te0CGdEBBL-PDwvRgq9My6snLSWxR_c-nNsNOiRIVWGWvR1Qts0bQEVb2w-JgtW7claTDKpFrNoYWFz9oF0wd3gonozATjGm9O0Zwxr4.8nTIK5OfIgvmhiPpiuf1ssYsMoVBESR8mUnwicqPLYM&dib_tag=se&keywords=microservices+with+spring+boot+and+spring+cloud&qid=1722355914&s=books&sprefix=Spring+Boot+Micro%2Cstripbooks-intl-ship%2C192&sr=1-1">
            Microservices with Spring Boot 3 and Spring Cloud
          </Tool>
          <Tool title="Web Scalability for Startup Engineers"
          href="https://www.amazon.com/Scalability-Startup-Engineers-Artur-Ejsmont/dp/0071843655/ref=sr_1_1?crid=T84ETCRBQE06&dib=eyJ2IjoiMSJ9.1xTVp7QxuHK_Pv3uWOdZ37m1R8ESqwhAVNx-DKI3Lrqrm5zKj2uI-Rt3gjY2ZgPtZ0R5RN8b6Xo6ztRno-QHGIZzdonGzeBcsxL_kopL1KnCpAzFaT7LzwA4wCWdxA99b3eGHTQJHGIVpO4u37lQUw.zAdt-h0qZ1XuCVRaIWE34l0tIf1e38425nEqUVvWVIc&dib_tag=se&keywords=web+scalability+for+startup+engineers&qid=1722356002&s=books&sprefix=Web+Scalabi%2Cstripbooks-intl-ship%2C258&sr=1-1">
            Web Scalability for Startup Engineers
          </Tool>
        </ToolsSection>
      </div>
    </SimpleLayout>
  )
}
