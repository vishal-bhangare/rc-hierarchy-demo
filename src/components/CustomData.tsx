import { Button } from "react-bootstrap";
import styles from "../styles/CustomData.module.css";
import CodeMirror from "@uiw/react-codemirror";
import { json } from "@codemirror/lang-json";
import { useCallback, useState } from "react";
import { js_beautify } from "js-beautify";

interface Props {
  data: any;
  onLoad: (data: any) => void;
  closeCustomDataInput: () => void;
}

const dummyData = `{
  "root":{
    "child1":{},
    "child2":{}
  }
}`;

const beautifyData = (data: string) =>
  js_beautify(JSON.stringify(data), { indent_size: 2 });

const CustomData = ({ onLoad, closeCustomDataInput, data }: Props) => {
  const [value, setValue] = useState(
    Object.keys(data).length ? beautifyData(data) : dummyData
  );
  const onChange = useCallback((val: string, _viewUpdate: any) => {
    setValue(val);
  }, []);

  const handleSave = () => {
    onLoad(JSON.parse(value));
    closeCustomDataInput();
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.cm_wrapper}>
          <CodeMirror
            value={value}
            height="400px"
            extensions={[json()]}
            onChange={onChange}
          />
        </div>
        <div className={styles.actionBtns}>
          <Button size="sm" onClick={handleSave}>
            Save
          </Button>
          <Button size="sm" variant="secondary" onClick={closeCustomDataInput}>
            Close
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CustomData;
