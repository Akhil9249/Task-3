import React, { useState } from "react";

const Accordion = () => {
    const [open, setOpen] = useState(0);
    const [faq, setFaq] = useState([
        {
            id: 1,
            titlle: "Accordion1",
            content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
        },
        {
            id: 2,
            titlle: "Accordion2",
            content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
        },
        {
            id: 3,
            titlle: "Accordion3",
            content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
        },
        {
            id: 4,
            titlle: "Accordion4",
            content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
        },
        {
            id: 5,
            titlle: "Accordion5",
            content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
        },
    ]);

    const selectFaq = (faqId) => {
        setOpen(open == faqId ? "" : faqId);
    };
    return (
        <div className="Accordion">
            <h2 className="heading">Accordion</h2>
            {faq.map((data) => (
                <div key={data.id} className="content">
                    <div className="head">
                        <span className="title">{data.titlle}</span>
                        <button onClick={() => selectFaq(data.id)} className="btn">
                            <img className="image" src="./src/assets/down.png" alt="" />
                        </button>
                    </div>
                    {open == data.id ? (
                        <div className="contentSub">
                            <p>{data.content}</p>
                        </div>
                    ) : (
                        ""
                    )}
                </div>
            ))}
        </div>
    );
};

export default Accordion;
