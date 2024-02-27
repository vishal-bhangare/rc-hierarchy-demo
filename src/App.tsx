import { Hierarchy } from "rc-hierarchy";
import "./App.css";
import { Talents, animalKingdom } from "./data";
import { Form, Row, Col, Button } from "react-bootstrap";
import { useState } from "react";
import settingIcon from "./assets/setting.png";
import infoIcon from "./assets/info.png";

const defaultConfig = {
  isCompact: false,
  fontSize: 16,
  fontFamily: "Arial",
  xt: 30,
  yt: 30,
  ct: 3,
  maxWid: 100,
  minWid: 50,
  strokeWidth: 3,
  boxSpacing: 15,
  boxPadding: 4,
  boxRadius: 5,
  canvasPadding: 20,
};
const data: { [key: string]: any } = {
  Talents: Talents,
  "Animal Kingdom": animalKingdom,
};
const fonts = ["Arial", "Courier"];
function App() {
  const [config, setConfig] = useState(defaultConfig);
  const [curData, setCurData] = useState(Talents);
  const [isOpen, setOpen] = useState(true);
  const [isInfoOpen, setInfoOpen] = useState(false);

  const changeConfig = (e: any) => {
    if (e.target.name == "isCompact") {
      setConfig((config) => ({
        ...config,
        [e.target.name]: e.target.value == "compact" ? true : false,
      }));
    } else {
      const value =
        e.target.type == "number" ? parseInt(e.target.value) : e.target.value;

      setConfig((config) => ({
        ...config,
        [e.target.name]: value,
      }));
    }
    console.log();
  };

  return (
    <div className="main">
      <div
        id="settings"
        onClick={() => {
          setOpen((isOpen) => !isOpen);
        }}
        style={{ left: isOpen ? "260px" : "0" }}
      >
        <img src={settingIcon} alt="" />
      </div>
      <div className="sidebar" style={{ display: isOpen ? "block" : "none" }}>
        <Form as={Col}>
          <Form.Group as={Col} controlId="data" className="formElement">
            <Form.Label column>Data:</Form.Label>
            <Form.Control
              as="select"
              onChange={(e) => {
                setCurData(data[e.target.value.toString()]);
              }}
            >
              {Object.entries(data).map((d, i) => (
                <option value={d[0]} key={i}>
                  {d[0]}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
          <Form.Group as={Col} controlId="drawingMode" className="formElement">
            <Form.Label row sm={5}>
              Drawing mode:
            </Form.Label>
            <Row sm={7}>
              <Col>
                <Form.Check
                  type="radio"
                  id="normal"
                  name="isCompact"
                  label="Normal"
                  value="normal"
                  checked={!config.isCompact}
                  onChange={changeConfig}
                />
              </Col>{" "}
              <Col>
                <Form.Check
                  type="radio"
                  id="compact"
                  name="isCompact"
                  label="Compact"
                  value="compact"
                  checked={config.isCompact}
                  onChange={changeConfig}
                />{" "}
              </Col>
            </Row>
          </Form.Group>
          <Form.Group as={Row} controlId="fontsize" className="formElement">
            <Form.Label column sm={7}>
              Font Size:
            </Form.Label>
            <Col sm={5}>
              <Form.Control
                type="number"
                name="fontSize"
                value={config.fontSize}
                onChange={changeConfig}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="fontFamily" className="formElement">
            <Form.Label column sm={7}>
              Font Family:
            </Form.Label>
            <Col sm={5}>
              <Form.Control
                as="select"
                onChange={changeConfig}
                name="fontFamily"
              >
                {fonts.map((font: string, i) => (
                  <option value={font} key={i}>
                    {font}
                  </option>
                ))}
              </Form.Control>
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="xt" className="formElement">
            <Form.Label column sm={7}>
              xt:
            </Form.Label>
            <Col sm={5}>
              <Form.Control
                type="number"
                name="xt"
                value={config.xt}
                onChange={changeConfig}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="yt" className="formElement">
            <Form.Label column sm={7}>
              yt:
            </Form.Label>
            <Col sm={5}>
              <Form.Control
                type="number"
                name="yt"
                value={config.yt}
                onChange={changeConfig}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="maxWid" className="formElement">
            <Form.Label column sm={7}>
              maxWid:
            </Form.Label>
            <Col sm={5}>
              <Form.Control
                type="number"
                name="maxWid"
                value={config.maxWid}
                onChange={changeConfig}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="minWid" className="formElement">
            <Form.Label column sm={7}>
              minWid:
            </Form.Label>
            <Col sm={5}>
              <Form.Control
                type="number"
                name="minWid"
                value={config.minWid}
                onChange={changeConfig}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="strokeWidth" className="formElement">
            <Form.Label column sm={7}>
              strokeWidth:
            </Form.Label>
            <Col sm={5}>
              <Form.Control
                type="number"
                name="strokeWidth"
                value={config.strokeWidth}
                onChange={changeConfig}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="boxSpacing" className="formElement">
            <Form.Label column sm={7}>
              boxSpacing:
            </Form.Label>
            <Col sm={5}>
              <Form.Control
                type="number"
                name="boxSpacing"
                value={config.boxSpacing}
                onChange={changeConfig}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="boxPadding" className="formElement">
            <Form.Label column sm={7}>
              boxPadding:
            </Form.Label>
            <Col sm={5}>
              <Form.Control
                type="number"
                name="boxPadding"
                value={config.boxPadding}
                onChange={changeConfig}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="boxRadius" className="formElement">
            <Form.Label column sm={7}>
              boxRadius:
            </Form.Label>
            <Col sm={5}>
              <Form.Control
                type="number"
                name="boxRadius"
                value={config.boxRadius}
                onChange={changeConfig}
              />
            </Col>
          </Form.Group>
          <Form.Group
            as={Row}
            controlId="canvasPadding"
            className="formElement"
          >
            <Form.Label column sm={7}>
              canvasPadding:
            </Form.Label>
            <Col sm={5}>
              <Form.Control
                type="number"
                name="canvasPadding"
                value={config.canvasPadding}
                onChange={changeConfig}
              />
            </Col>
          </Form.Group>{" "}
        </Form>
      </div>

      <div className="hierarchy">
        <div className="wrapper">
          <Hierarchy data={curData} config={config} />
        </div>
      </div>

      <Button
        onClick={() => {
          setInfoOpen(() => true);
        }}
        variant="light"
        className="position-absolute bottom-0 end-0 m-2"
      >
        <img src={infoIcon} alt="" className="w-100 h-100" />
      </Button>

      <div id="info" style={{ display: isInfoOpen ? "block" : "none" }}>
        <div className="wrapper">
          {" "}
          <div className="title">
            <h1>rc-hierarchy</h1>
            <p>
              React Component Library for visualizing tree like hierarchical
              data.
            </p>
          </div>
          <div className="install">
            <h2>Installation</h2>
            <div className="npm">
              <p>You can install this component via npm:</p>
              <code>npm i rc-hierarchy</code>
            </div>
            <div className="yarn">
              <p>Or using yarn:</p>
              <code>yarn add rc-hierarchy</code>
            </div>
          </div>
          <div className="links">
            <h2>Reference Links</h2>
            <div className="link">
              <span>Npm package:</span>
              <a href="https://www.npmjs.com/package/rc-hierarchy">
                https://www.npmjs.com/package/rc-hierarchy
              </a>
            </div>
            <div className="link">
              <span>Source code:</span>
              <a href="https://github.com/vishal-bhangare/rc-hierarchy">
                https://github.com/vishal-bhangare/rc-hierarchy
              </a>
            </div>
            <div className="link">
              <span>Demo repo:</span>
              <a href="https://github.com/vishal-bhangare/rc-hierarchy-demo">
                https://github.com/vishal-bhangare/rc-hierarchy-demo
              </a>
            </div>
            <div className="link">
              <span>Example data:</span>
              <a href="https://github.com/vishal-bhangare/rc-hierarchy-demo/blob/main/src/data.ts">
                https://github.com/vishal-bhangare/rc-hierarchy-demo/blob/main/src/data.ts
              </a>
            </div>
          </div>
          <Button
            variant="secondary"
            className="my-2"
            onClick={() => {
              setInfoOpen(() => false);
            }}
          >
            Close
          </Button>
        </div>
      </div>
    </div>
  );
}

export default App;
