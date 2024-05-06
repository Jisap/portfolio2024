'use client'

import { ACCORDION } from "@/constants/data";
import { useState } from "react";
import { Collapse } from "react-collapse";                // Collapse oculta o muestra un elemento cambiando la altura del mismo
import { FaLock, FaLockOpen } from "react-icons/fa6";

const Accordion = ({ sliceCount }) => {   // Accordion recibe una porción de las preguntas disponibles
  
  const [open, setOpen] = useState(null); // indica qué pregunta está actualmente abierta
  
  const toggle = (index) => {
    if(open === index) {                  // Si open = index -> la pregunta esta abierta
      return setOpen(null)                // Se debe cerrar
    }
    setOpen(index);                       // Establece estado de open ( pregunta abierta ) con el index de la pregunta donde se hace click
  }

  //Slice the accordion data based on the sliceCount prop

  const slicedAccordion = sliceCount ? ACCORDION.slice(0, sliceCount) : ACCORDION

  return (
    <div>
      <div>
        {slicedAccordion.slice({sliceCount}).map((item, index) => (
          <AccordionItem 
            key={index}
            open={index === open}         // Si se cumple la condición open=true -> <FaLockOpen />
            question={item.question}
            answer={item.answer}
            toggle={() => toggle(index)}  // Establece el estado de open con el index del item renderizado -> muestra la respuesta
          />
        ))}
      </div>
    </div>
  )
}

const AccordionItem = ({ open, toggle, question, answer }) => {
  return (
    <div>
      <div 
        className="px-3 py-2 medium-16 flex items-center gap-x-4 cursor-pointer transition-all duration-300 mb-2" 
        onClick={toggle}
      >
        <div>{open ? <FaLockOpen /> : <FaLock />}</div>
        <h4>{question}</h4>
      </div>
      <div className="mb-2">
        {/* Solo una pregunta podrá estar abierta */}
        <Collapse  isOpened={open}>
          <p className="px-6">{answer}</p>
        </Collapse>
      </div>
    </div>
  )

}

export default Accordion