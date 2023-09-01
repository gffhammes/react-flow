import { Button, Stack, styled } from "@mui/material";
import { useFlowContext } from "../Flow/context/useFlowContext";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import { ReactFlowJsonObject } from "reactflow";

export const HeaderActions = () => {
  const { importFlow, exportFlow } = useFlowContext();

  const changeHandler: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    if (!event.target.files) return;

    const fileReader = new FileReader();

    fileReader.readAsText(event.target.files[0], "UTF-8");
    fileReader.onload = (e) => {
      if (!e.target) return;

      if (!e.target.result) return;

      importFlow(JSON.parse(e.target.result as string) as ReactFlowJsonObject);
    };
  };

  return (
    <Stack direction="row" spacing={2}>
      <Button
        variant="outlined"
        component="label"
        role={undefined}
        startIcon={<FileUploadIcon />}
      >
        Importar
        <VisuallyHiddenInput type="file" onChange={changeHandler} />
      </Button>

      <Button
        variant="outlined"
        onClick={exportFlow}
        startIcon={<FileDownloadIcon />}
      >
        Exportar
      </Button>
    </Stack>
  );
};

const VisuallyHiddenInput = styled("input")`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  bottom: 0;
  left: 0;
  white-space: nowrap;
  width: 1px;
`;
