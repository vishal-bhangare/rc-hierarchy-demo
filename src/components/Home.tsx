import { Hierarchy } from "rc-hierarchy";
import { Talents, animalKingdom } from "../data";
import { Form, Row, Col, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import settingIcon from "../assets/setting.png";
import infoIcon from "../assets/info.png";
import CustomData from "../components/CustomData";
import styles from "../styles/Home.module.css";
import About from "./About";

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
  canvasBackgroundColor: "#ffffff",
};
const examples: { [key: string]: any } = {
  Talents: Talents,
  "Animal Kingdom": animalKingdom,
  Custom: {},
};

const fonts = [
  "Arial",
  "Courier",
  "Courier New",
  "Verdana",
  "Tahoma",
  "Trebuchet MS",
  "Times New Roman",
  "Georgia",
];

function Home() {
  const [config, setConfig] = useState(defaultConfig);
  const [curData, setCurData] = useState("Talents");
  const [customData, setCustomData] = useState(examples[curData]);
  const [isDataEdited, setDataEdited] = useState(false);
  const [isOpen, setOpen] = useState(true);
  const [isAboutOpen, setAboutOpen] = useState(false);
  const [customDataInput, setCustomDataInput] = useState(false);
  const [canvas, setCanvas] = useState<HTMLCanvasElement | null>(null);

  const toggleAbout = () => setAboutOpen(!isAboutOpen);
  const closeCustomDataInput = () => setCustomDataInput(false);

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
  };

  const saveCanvas = (event: any) => {
    const link = event.currentTarget;
    link.setAttribute("download", `${curData}.png`);
    const image = canvas!
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");
    link.setAttribute("href", image);
  };

  useEffect(() => {
    setCanvas(document.getElementById("canvas") as HTMLCanvasElement);
  }, []);

  return (
    <div className={styles.main}>
      <div
        className={styles.settings}
        onClick={() => {
          setOpen((isOpen) => !isOpen);
        }}
        style={{ left: isOpen ? "260px" : "0" }}
      >
        <img src={settingIcon} alt="" />
      </div>
      <div
        className={styles.sidebar}
        style={{ display: isOpen ? "block" : "none" }}
      >
        <Form as={Col}>
          <Form.Group as={Col} controlId="data" className={styles.formElement}>
            <Form.Label column>Data:</Form.Label>
            <Form.Control
              as="select"
              onChange={(e) => {
                const value = e.target.value.toString();
                setCurData(value);
                setCustomData(examples[value]);
              }}
            >
              {Object.entries(examples).map((d, i) => (
                <option value={d[0]} key={i} className={styles.option}>
                  {d[0]}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
          {curData === "Custom" ? (
            <Button size="sm" onClick={() => setCustomDataInput(true)}>
              Load Data
            </Button>
          ) : (
            <Button
              size="sm"
              onClick={() => {
                setCustomDataInput(true);
                setDataEdited(true);
              }}
            >
              Edit Data
            </Button>
          )}
          <Form.Group
            as={Col}
            controlId="drawingMode"
            className={styles.formElement}
          >
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
          <Form.Group
            as={Row}
            controlId="fontsize"
            className={styles.formElement}
          >
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
          <Form.Group
            as={Row}
            controlId="fontFamily"
            className={styles.formElement}
          >
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
          <Form.Group as={Row} controlId="xt" className={styles.formElement}>
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
          <Form.Group as={Row} controlId="yt" className={styles.formElement}>
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
          {config.isCompact && (
            <Form.Group as={Row} controlId="ct" className={styles.formElement}>
              <Form.Label column sm={7}>
                ct:
              </Form.Label>
              <Col sm={5}>
                <Form.Control
                  type="number"
                  name="ct"
                  value={config.ct}
                  onChange={changeConfig}
                  min={1}
                  max={5}
                />
              </Col>
            </Form.Group>
          )}
          <Form.Group
            as={Row}
            controlId="maxWid"
            className={styles.formElement}
          >
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
          <Form.Group
            as={Row}
            controlId="minWid"
            className={styles.formElement}
          >
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
          <Form.Group
            as={Row}
            controlId="strokeWidth"
            className={styles.formElement}
          >
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
          <Form.Group
            as={Row}
            controlId="boxSpacing"
            className={styles.formElement}
          >
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
          <Form.Group
            as={Row}
            controlId="boxPadding"
            className={styles.formElement}
          >
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
          <Form.Group
            as={Row}
            controlId="boxRadius"
            className={styles.formElement}
          >
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
            className={styles.formElement}
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
          </Form.Group>
          <Form.Group
            as={Row}
            controlId="canvasPadding"
            className={styles.formElement}
          >
            <Form.Label column sm={7}>
              Background Color:
            </Form.Label>
            <Col sm={5}>
              <Form.Control
                type="color"
                name="canvasBackgroundColor"
                value={config.canvasBackgroundColor}
                onChange={changeConfig}
              />
            </Col>
          </Form.Group>
          <Button className={styles.saveBtn}>
            <a onClick={saveCanvas}>Save Canvas</a>
          </Button>
        </Form>
      </div>

      <div className={styles.hierarchy}>
        <div className={styles.wrapper}>
          {Object.keys(
            curData === "custom" || isDataEdited
              ? customData
              : examples[curData]
          ).length ? (
            <Hierarchy
              data={
                curData === "custom" || isDataEdited
                  ? customData
                  : examples[curData]
              }
              config={config}
            />
          ) : (
            "LOAD DATA"
          )}
        </div>
      </div>

      <Button
        onClick={() => {
          setAboutOpen(() => true);
        }}
        variant="light"
        className="position-absolute bottom-0 end-0 m-2"
      >
        <img src={infoIcon} alt="" className="w-100 h-100" />
      </Button>
      {isAboutOpen && <About toggleAbout={toggleAbout} />}
      {customDataInput && (
        <CustomData
          onLoad={setCustomData}
          closeCustomDataInput={closeCustomDataInput}
          data={customData}
        />
      )}
    </div>
  );
}

export default Home;
