import React, { useState, useEffect } from "react";
import "./EmployeeRow.css";
import "./DisplayOnMobile.css";
import FormatPhone from "../../utils/FormatPhone";

interface EmployeeRowProps {
  employee: {
    id: number;
    name: string;
    job: string;
    admission_date: string;
    phone: string;
    image: string;
  };
};

const EmployeeRow: React.FC<EmployeeRowProps> = ({ employee }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleOpen = () => {
    if (isMobile) {
      setIsOpen(!isOpen);
    };
  };

  const formattedDate = new Date(employee.admission_date).toLocaleDateString();

  return (
    <>
      <tr onClick={toggleOpen} className="employee-summary">
        <td>
          <img src={employee.image} alt={employee.name} className="avatar" />
        </td>
        <td>{employee.name}</td>
        <td data-label="Cargo" className="hide-on-mobile">
          {employee.job}
        </td>
        <td data-label="Data de Admissão" className="hide-on-mobile">
          {formattedDate}
        </td>
        <td data-label="Telefone" className="hide-on-mobile">
          {FormatPhone(employee.phone)}
        </td>
        {isMobile && <td className="toggle-arrow">{isOpen ? "▲" : "▼"}</td>}
      </tr>
      {isOpen && isMobile && (
        <tr className="employee-details">
          <td colSpan={6}>
            <div className="employee-details-content">
              <div>
                <strong>Cargo: </strong> {employee.job}
              </div>
              <div>
                <strong>Data de Admissão: </strong> {formattedDate}
              </div>
              <div>
                <strong>Telefone: </strong> {FormatPhone(employee.phone)}
              </div>
            </div>
          </td>
        </tr>
      )}
    </>
  );
};

export default EmployeeRow;
