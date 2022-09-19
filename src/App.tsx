import {
  Box,
  Checkbox,
  FormControlLabel,
  FormLabel,
  FormGroup,
  FormControl,
} from "@mui/material";
import React, { useState } from "react";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";

function App() {
  {/*
  Checkbox,
  Box,
  FormControlLabel,
  FormLabel,
  FormGroup,
  FormControl,BookmarkIcon,BookmarkBorderIcon,CkeckBox with useState*/}
  const [accept, setAccept] = useState(false);
  const [skills, setSkills] = useState<string[]>([]);
  console.log({ skills });
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAccept(e.target.checked);
  };
  const handleSkillChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const index = skills.indexOf(e.target.value);
    if (index === -1) {
      setSkills([...skills, e.target.value]);
    } else {
      setSkills(skills.filter((skills) => skills !== e.target.value));
    }
  };
  return (
    <Box>
      <Box>
        <FormControlLabel
          label="i accept terms and condition"
          control={<Checkbox checked={accept} onChange={changeHandler} />}
        />
      </Box>
      <Box>
        <Checkbox
       
          icon={<BookmarkBorderIcon />}
          checkedIcon={<BookmarkIcon />}
          checked={accept}
          onChange={changeHandler}
        />
         <FormLabel>Accept And Approve</FormLabel>
      </Box>
      <Box>
        <FormControl>
          <FormLabel>Skills</FormLabel>
          <FormGroup>
            <FormControlLabel
              label="HTML"
              value="HTML"
              control={
                <Checkbox
                  checked={skills.includes("HTML")}
                  onChange={handleSkillChange}
                  size="medium"
                  color="error"
                />
              }
            />
            <FormControlLabel
              label="CSS"
              value="CSS"
              control={
                <Checkbox
                  checked={skills.includes("CSS")}
                  onChange={handleSkillChange}
                  size="medium"
                  color="warning"
                />
              }
            />
            <FormControlLabel
              label="JavaScript"
              value="JavaScript"
              control={
                <Checkbox
                  checked={skills.includes("JavaScript")}
                  onChange={handleSkillChange}
                  size="medium"
                  color="success"
                />
              }
            />
          </FormGroup>
        </FormControl>
      </Box>
    </Box>
  );
}

export default App;
