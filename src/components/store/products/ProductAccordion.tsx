import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";

export default function ProductAccordion() {
  return (
    <Accordion
      type="multiple"
      defaultValue={["item-1", "item-2", "item-3", "item-4", "item-5"]}
    >
      <AccordionItem value="item-1">
        <AccordionTrigger>Disponibilté</AccordionTrigger>
        <AccordionContent className="flex gap-2">
          <Checkbox id="stock" />
          <label htmlFor="stock">En stock</label>
        </AccordionContent>
        <AccordionContent className="flex gap-2">
          <Checkbox id="stock" />
          <label htmlFor="stock">En rupture de stock</label>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Type de produits</AccordionTrigger>
        <AccordionContent className="flex gap-2">
          <Checkbox id="stock" />
          <label htmlFor="stock">T-shirts</label>
        </AccordionContent>
        <AccordionContent className="flex gap-2">
          <Checkbox id="stock" />
          <label htmlFor="stock">Shirts</label>
        </AccordionContent>
        <AccordionContent className="flex gap-2">
          <Checkbox id="stock" />
          <label htmlFor="stock">Pull</label>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Tailles</AccordionTrigger>
        <AccordionContent className="flex gap-2">
          <Checkbox id="stock" />
          <label htmlFor="stock">XS</label>
        </AccordionContent>
        <AccordionContent className="flex gap-2">
          <Checkbox id="stock" />
          <label htmlFor="stock">S</label>
        </AccordionContent>
        <AccordionContent className="flex gap-2">
          <Checkbox id="stock" />
          <label htmlFor="stock">M</label>
        </AccordionContent>
        <AccordionContent className="flex gap-2">
          <Checkbox id="stock" />
          <label htmlFor="stock">L</label>
        </AccordionContent>
        <AccordionContent className="flex gap-2">
          <Checkbox id="stock" />
          <label htmlFor="stock">XL</label>
        </AccordionContent>
        <AccordionContent className="flex gap-2">
          <Checkbox id="stock" />
          <label htmlFor="stock">XXL</label>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger>Couleur</AccordionTrigger>
        <AccordionContent className="flex gap-2">
          <Checkbox id="stock" />
          <label htmlFor="stock">Noir</label>
        </AccordionContent>
        <AccordionContent className="flex gap-2">
          <Checkbox id="stock" />
          <label htmlFor="stock">Beige</label>
        </AccordionContent>
        <AccordionContent className="flex gap-2">
          <Checkbox id="stock" />
          <label htmlFor="stock">Blanc</label>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-5">
        <AccordionTrigger>Prix</AccordionTrigger>
        <AccordionContent className="flex gap-2">
          <Checkbox id="stock" />
          <label htmlFor="stock">Les classiques</label>
        </AccordionContent>
        <AccordionContent className="flex gap-2">
          <Checkbox id="stock" />
          <label htmlFor="stock">Shine in black</label>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
