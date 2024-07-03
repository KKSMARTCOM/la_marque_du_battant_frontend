import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
export default function CartAccordion() {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger className="hover:no-underline">
          Informations sur le paiement
        </AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern. Yes. It adheres to the
          WAI-ARIA design pattern.Yes. It adheres to the WAI-ARIA design
          pattern.Yes. It adheres to the WAI-ARIA design pattern.Yes. It adheres
          to the WAI-ARIA design pattern.Yes. It adheres to the WAI-ARIA design
          pattern.Yes. It adheres to the WAI-ARIA design pattern. Expédition et
          retours
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger className="hover:no-underline">
          Expédition et retours
        </AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern. Yes. It adheres to the
          WAI-ARIA design pattern.Yes. It adheres to the WAI-ARIA design
          pattern.Yes. It adheres to the WAI-ARIA design pattern.Yes. It adheres
          to the WAI-ARIA design pattern.Yes. It adheres to the WAI-ARIA design
          pattern.Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
