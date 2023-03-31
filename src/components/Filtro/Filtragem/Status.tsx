import { useState } from "react"
import { AccordionBody, AccordionHeader, AccordionItem, Button, ButtonGroup, UncontrolledAccordion } from "reactstrap"

const Status = ({setPageNumber, setStatus}) => {
    const status = [
        { item: "Alive", label: "Vivo" }, 
        { item: "Dead", label: "Morto" }, 
        { item: "Unknown", label: "Desconhecido" }]
    const [radioSelected, setRadioSelected] = useState(-1)
    return (
    <UncontrolledAccordion>
        <AccordionItem style={{width: '15rem'}}>
          <AccordionHeader targetId="1">
            Status
          </AccordionHeader>
            <AccordionBody accordionId="1">
            <ButtonGroup>
            <div className="d-flex flex-wrap gap-2">
            {status.map((item, index) => (
              <Button
              key={index}
              id={`status-${index}`}
              color="primary"
              outline
              onClick={() => {
                  setPageNumber(1)
                  setStatus(item.item)
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
       
      </UncontrolledAccordion>)
}

export default Status