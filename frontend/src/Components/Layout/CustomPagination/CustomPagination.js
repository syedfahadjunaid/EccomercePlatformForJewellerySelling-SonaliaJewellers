import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export default function CustomPagination({ count, setPage }) {
  return (
    <Stack spacing={2}>
      <Pagination
        count={count}
        variant="outlined"
        shape="rounded"
        color="primary"
        onChange={(_, value) => {
          setPage(value);
          window.scroll(0, 0);
        }}
      />
    </Stack>
  );
}
