import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";
import { faqs } from "../lib/constrant";

const Faq = () => {
  return (
    <div className="bg-white rounded-[0.5rem] flex-[1] py-[58px] px-[62px]">
      <div>
        <h3 className="text-[2.25em] font-medium mb-[1.125rem]">
          FAQ - Câu hỏi thường gặp
        </h3>
      </div>
      <div>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((item) => (
            <AccordionItem value={item.id} key={item.id}>
              <AccordionTrigger>{item.title}</AccordionTrigger>
              <AccordionContent>{item.des}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default Faq;
