import React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Avatar,
  Button,
  Tooltip,
  MenuItem,
  FormControl,
  Grid,
  TextField,
  InputLabel,
  Select,
  FormLabel,
} from "@mui/material";

function QueryData() {
  return (
    <Box>
      <Box sx={{ mt: 2, ml: 2 }}>
        <Button
          sx={{ justifyContent: "start", textTransform: "initial" }}
          variant="text"
          color="btnColor"
          padding="0rem"
        >
          <Typography color="primary">Details</Typography>
        </Button>
        <Button
          sx={{ ml: 2, justifyContent: "start", textTransform: "initial" }}
          variant="text"
          color="btnColor"
        >
          <Typography color="secondary">Preview</Typography>
        </Button>
      </Box>
      <Box sx={{ mt: 2, ml: 3 }}>
        <FormControl sx={{ display: "flex" }}>
          <Grid container rowSpacing={3} columnGap={4}>
            <Grid item xs={4}>
              <FormControl fullWidth sx={{ gap: "0.5rem" }}>
                <FormLabel id="query-table">Query Name*</FormLabel>
                <TextField
                  required
                  fullWidth
                  id="query-table"
                  placeholder="Untitled Query - 1"
                  size="small"
                />
              </FormControl>
            </Grid>
            <Grid item xs={3}>
              <FormControl fullWidth sx={{ gap: "0.5rem" }}>
                <FormLabel id="select-table">Table Name*</FormLabel>
                <Select
                  required
                  fullWidth
                  size="small"
                  id="select-table"
                  defaultValue="none"
                  //   sx={{
                  //     color: defaultValue ? "secondary.main" : "primary.main",
                  //   }}
                >
                  <MenuItem value="none" disabled>
                    Select Table
                  </MenuItem>
                  <MenuItem value="SKUs">SKUs</MenuItem>
                  <MenuItem value="Products">Products</MenuItem>
                  <MenuItem value="Country">Country</MenuItem>
                  <MenuItem value="Region">Region</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </FormControl>
      </Box>
    </Box>
  );
}

export default QueryData;
