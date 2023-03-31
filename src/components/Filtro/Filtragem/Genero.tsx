import { useState } from "react"
import { AccordionBody, AccordionHeader, AccordionItem, Button, ButtonGroup, UncontrolledAccordion } from "reactstrap"

const Genero = ({setPageNumber, setGender}) => {
    const gender = [
        { item: "Female", label: "Feminino" },
        { item: "Male", label: "Masculino" },
        { item: "Genderless", label: "Sem gênero" },
        { item: "Unknown", label: "Desconhecido" }
      ]
      const [radioSelected, setRadioSelected] = useState(-1)
    return (
    <UncontrolledAccordion>
        <AccordionItem style={{width: '20rem'}}>
          <AccordionHeader targetId="1">
            Gênero
          </AccordionHeader>
          <AccordionBody accordionId="1">
           <ButtonGroup>
           <div className="d-flex flex-wrap gap-2">
           {gender.map((item, index) => (
                <Button
                key={index}
                id={`status-${index}`}
                color="primary"
                outline
                onClick={() => {
                    setPageNumber(1)
                    setGender(item.item)
                    setRadioSelected(index)
                }}
                active={radioSelected === index}
                >
                {item.label}
                </Button>
           ))}
           </div>
           </ButtonGroup>
          </AccordionBody>
        </AccordionItem>
    </UncontrolledAccordion>
    )
}

export default Genero