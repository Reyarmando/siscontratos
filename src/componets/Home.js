import { Accordion, Row, Col, Tabs, Tab, ListGroup, Collapse, Button } from 'react-bootstrap';
import { useState } from 'react';
import BandejaEntrada from './BandejaEntrada';
import Buscar from './Buscar'
import '../css/Home.css'
import '../css/Tabs.scss'

function Login() {

    const [key, setKey] = useState('BandejaEntrada');

    const [showA, setShowA] = useState(false);

    const toggleShowA = () => {
        setShowA(true)
    };
    const toggleCloseA = () => {
        setShowA(false)

    };

    const [showB, setShowB] = useState(true);

    const toggleShowB = () => setShowB(!showB);

    const [showC, setShowC] = useState(false);

    const toggleShowC = () => setShowC(!showA);

    var states = {
        in: true,
    }

    const [state, setState] = useState(states)

    const clickBandejaEntrada = () => {
        setKey("BandejaEntrada")
    }

    const clickBuscar = () => {
        setKey("Buscar")
    }

    const clickFirmaElectronica = () => {
        setState(states => {
            return { in: !states.in }
        })
        console.log(state)
        setKey("FirmaElectrocina")
    }

    const [open, setOpen] = useState(false);

    const li = document.querySelectorAll('.li')

    const bloque = document.querySelectorAll('bloque')

    const [click, setClick] = useState()

    const doclick = () => {
        setClick('click')
        console.log(click)
    }

    const [index, setIndex] = useState(0)

    li.forEach((cadaLi, i) => {
        li[i].addEventListener(click, () => {

            li.forEach((cadaLi, i) => {
                li[i].remove('activo')
                bloque[i].remove('activo')
            })

            li[i].add('activo')
            bloque[i].add('activo')

        })
    })

    const [showTab, setShowTab] = useState(true)

    const handleCloseTab = () => {
        setShowTab(!showTab)
        console.log(showTab)
    }

    const [tabsList, setTabsList] = useState([{tab: "", name: ""}])

    const handleTabAdd = (e) => {
        const { id, value, name } = e.target
        setTabsList([...tabsList, { value: value, id: id, name: name }])
        console.log(tabsList)
    }

    const handleTabRemove = (index) => {
        const list = [...tabsList]
        list.splice(index, 1)
        setTabsList(list)
    }

    return (
        <div className='px-4'>
            <h1>Home</h1>
            <Row>
                <Col sm={3}>
                    <Accordion>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Mantenimiento</Accordion.Header>
                            <Accordion.Body>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                est laborum.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Reportes</Accordion.Header>
                            <Accordion.Body>
                                <ListGroup defaultActiveKey="#link1">
                                    <ListGroup.Item action variant="light" onClick={clickBandejaEntrada}>
                                        Bandeja de entrada
                                    </ListGroup.Item>
                                    <ListGroup.Item action variant="light" onClick={clickBuscar}>
                                        Buscar Documento
                                    </ListGroup.Item>
                                    <ListGroup.Item action variant="light" onClick={toggleShowA}>
                                        Seguimiento Firma Electronica
                                    </ListGroup.Item>
                                    <ListGroup.Item action variant="light" value={<Buscar/>} id='otros' name='otros' onClick={handleTabAdd}>
                                        Otros
                                    </ListGroup.Item>
                                    <ListGroup.Item action variant="light" onClick={() => setOpen(!open)}
                                        aria-controls="example-collapse-text"
                                        aria-expanded={open}>
                                        Buscar Documento 1.1
                                    </ListGroup.Item>
                                </ListGroup>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Col>
                <Col sm={9}>
                    <Tabs
                        id="controlled-tab"
                        activeKey={key}
                        onSelect={(k) => setKey(k)}
                        className="mb-3"
                        mountOnEnter
                        unmountOnExit
                    >
                        <Tab eventKey="BandejaEntrada" title="Bandeja de Entrada">
                            <BandejaEntrada />
                        </Tab>
                        {
                            showTab && <Tab mountOnEnter eventKey="Buscar" title={<Row><Col sm={9}>Buscar</Col><Col sm={3} onClick={handleCloseTab}>x</Col></Row>}>
                                <Buscar />
                            </Tab>
                        }
                        {tabsList.map((singleTab, index) => (
                            <Tab key={index} required eventKey={singleTab.name} title={<Row><Col sm={8}>{singleTab.name}</Col><Col sm={3} onClick={()=> handleTabRemove(index)}><span>x</span></Col></Row>}>
                                <><Buscar/></>
                            </Tab>
                        ))}
                    </Tabs>

                    <div className="tabs1">
                        <div className='nav-tabs1'>
                            {
                                showTab && <div className='nav-item1' onClick={() => { setIndex(0) }}>Boton 1<button type='button' onClick={handleCloseTab}>x</button></div>
                            }
                            <div className='nav-item1' onClick={() => { setIndex(1) }}>Boton 2</div>
                            <div className='nav-item1' onClick={() => { setIndex(2) }}>Boton 3</div>
                        </div>

                        <div className='tabContent1' hidden={index != 0}>bloque 1</div>
                        <div className='tabContent1' hidden={index != 1}>bloque 2</div>
                        <div className='tabContent1' hidden={index != 2}>bloque 3</div>

                    </div>

                    {
                        showTab && <p>holaaa mrdd aburasda</p>
                    }
                    <button type='button' onClick={handleCloseTab}>x</button>

                </Col>
            </Row>
        </div>


    )
}

export default Login