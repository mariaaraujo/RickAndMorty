import { useState } from "react"
import { AccordionBody, AccordionHeader, AccordionItem, Button, UncontrolledAccordion } from "reactstrap"

const Especie = ({setPageNumber, setSpecies}) => {
    const species = [
        { item: "Alien", label: "Alien" }, 
        { item: "Cronenberg", label: "Cronenberg" },
        { item: "Human", label: "Humano" }, 
        { item: "Humanoid", label: "Humanóide" },
        { item: "Disease", label: "Doença" },
        { item: "Robot", label: "Robô" },
        { item: "Mythological", label: "Mitológico" },
        { item: "Poopybutthole", label: "Poopybutthole" },
        { item: "Animal", label: "Animal" },
        { item: "Unknown", label: "Desconhecida" },
      ]
      const [radioSelected, setRadioSelected] = useState(-1)
    return (
    <UncontrolledAccordion>
        <AccordionItem style={{width: '20rem'}}>
          <AccordionHeader targetId="1">
            Espécie
          </AccordionHeader>
          <AccordionBody accordionId="1">
          <div className="d-flex flex-wrap gap-2">
          {species.map((item, index) => (
            <Button
            key={index}
            id={`status-${index}`}
            color="primary"
            outline
            onClick={() => {
                setPageNumber(1)
                setSpecies(item.item)
                setRadioSelected(index)
            }}
            active={radioSelected === index}
            >
            {item.label}
            </Button>
          ))}
          </div>
          </AccordionBody>
        </AccordionItem>
    </UncontrolledAccordion>
      )
}

export default Especie