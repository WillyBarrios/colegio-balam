import React, { useState } from 'react';
import './CarrerasGrid.css';
import carrerasData from '../components/carrerasData';

import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable'; 

function CarrerasGrid() {
    const [selectedCarreraId, setSelectedCarreraId] = useState(null);
    const [selectedCursoId, setSelectedCursoId] = useState(null);
    const handleCarreraClick = (id) => {
        setSelectedCarreraId(id === selectedCarreraId ? null : id);
        setSelectedCursoId(null); 
    };

    const handleCursoClick = (id) => {
        setSelectedCursoId(id === selectedCursoId ? null : id);
    };

    const getResumenCurso = (carreraId, cursoId) => {
        const carrera = carrerasData.find(c => c.id === carreraId);
        if (!carrera) return "";
        for (const año in carrera.pensum) {
            for (const trimestre in carrera.pensum[año]) {
                const curso = carrera.pensum[año][trimestre].find(p => p.id === cursoId);
                if (curso) return curso.resumen;
            }
        }
        return "";
    };

    const handleDownloadXLS = () => {
        if (!selectedCarreraId) {
            alert("Por favor, selecciona una carrera para descargar el pensum.");
            return;
        }

        const carreraSeleccionada = carrerasData.find(c => c.id === selectedCarreraId);
        if (!carreraSeleccionada) return;

        const dataToExport = [];
        dataToExport.push(["Año", "Trimestre", "Nombre del Curso", "Resumen"]);

        Object.entries(carreraSeleccionada.pensum).forEach(([año, trimestres]) => {
            Object.entries(trimestres).forEach(([trimestre, cursos]) => {
                cursos.forEach(curso => {
                    dataToExport.push([año, trimestre, curso.nombre, curso.resumen || ""]); 
                });
            });
        });

        const worksheet = XLSX.utils.aoa_to_sheet(dataToExport);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Pensum");

        const cols = [
            { wch: 10 }, { wch: 15 }, { wch: 40 }, { wch: 80 }
        ];
        worksheet['!cols'] = cols;

        const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
        const dataBlob = new Blob([excelBuffer], {type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8"});

        saveAs(dataBlob, `${carreraSeleccionada.nombre.replace(/ /g, "_")}_Pensum.xlsx`);
    };

    const handleDownloadPDF = () => {
        if (!selectedCarreraId) {
            alert("Por favor, selecciona una carrera para descargar el pensum.");
            return;
        }

        const carreraSeleccionada = carrerasData.find(c => c.id === selectedCarreraId);
        if (!carreraSeleccionada) return;

        const doc = new jsPDF(); // Se crea la instancia de jsPDF
        const pageWidth = doc.internal.pageSize.getWidth();

        doc.setFontSize(16);
        doc.text(`Pensum de: ${carreraSeleccionada.nombre}`, pageWidth / 2, 20, { align: 'center' });

        const tableColumn = ["Año", "Trimestre", "Curso", "Resumen"];
        const tableRows = [];

        Object.entries(carreraSeleccionada.pensum).forEach(([año, trimestres]) => {
            Object.entries(trimestres).forEach(([trimestre, cursos]) => {
                cursos.forEach(curso => {
                    const cursoData = [
                        año,
                        trimestre,
                        curso.nombre,
                        curso.resumen || ""
                    ];
                    tableRows.push(cursoData);
                });
            });
        });

        // Llama a autoTable como una función, pasando 'doc' y las opciones
        autoTable(doc, { 
            head: [tableColumn],
            body: tableRows,
            startY: 30,
            theme: 'grid',
            styles: {
                fontSize: 8,
                cellPadding: 2,
                overflow: 'linebreak'
            },
            headStyles: {
                fillColor: [22, 160, 133],
                textColor: [255, 255, 255],
                fontStyle: 'bold'
            },
            columnStyles: {
                0: { cellWidth: 20 },
                1: { cellWidth: 30 },
                2: { cellWidth: 50 },
                3: { cellWidth: 'auto' }
            },
            didDrawPage: function (data) {
                doc.setFontSize(10);
                doc.text('Página ' + doc.internal.getNumberOfPages(), data.settings.margin.left, doc.internal.pageSize.height - 10);
            }
        });

        doc.save(`${carreraSeleccionada.nombre.replace(/ /g, "_")}_Pensum.pdf`);
    };

    return (

        <div className="carreras-grid-container">
            <div className="carreras-grid">
                {carrerasData.map(carrera => (
                    <div
                        key={carrera.id}
                        className={`carrera-item ${selectedCarreraId === carrera.id ? 'selected' : ''}`}
                        onClick={() => handleCarreraClick(carrera.id)}
                    >
                        {carrera.nombre}
                    </div>
                ))}
            </div>

            {selectedCarreraId && (
                <div className="pensum-container">
                    <h2>Pensum de {carrerasData.find(c => c.id === selectedCarreraId).nombre}</h2>
                    
                    <div className="botones-descarga">
                        <button onClick={handleDownloadXLS} className="boton-descarga xls">
                            Descargar Pensum (XLS)
                        </button>
                        <button onClick={handleDownloadPDF} className="boton-descarga pdf">
                            Descargar Pensum (PDF)
                        </button>
                    </div>

                    {Object.entries(carrerasData.find(c => c.id === selectedCarreraId).pensum).map(([año, trimestres]) => (
                        <div key={año} className="año-container">
                            <h3>{año}</h3>
                            {Object.entries(trimestres).map(([trimestre, cursos]) => (
                                <div key={trimestre} className="trimestre-container">
                                    <h4>{trimestre}</h4>
                                    <div className="cursos-grid">
                                        {cursos.map(curso => (
                                            <div
                                                key={curso.id}
                                                className={`curso-wrapper ${selectedCursoId === curso.id ? 'flipped' : ''}`}
                                                onClick={() => handleCursoClick(curso.id)}
                                            >
                                                <div className="curso-item front">
                                                    {curso.nombre}
                                                </div>
                                                <div className="curso-item back">
                                                    <p>{curso.resumen || "No hay resumen disponible."}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default CarrerasGrid;