import React from "react";
import { Box, Link, Button, Stack } from "@mui/material";

// react icons
import { BsGlobe } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
import { FaRegUserCircle } from "react-icons/fa";
import { flexCenter } from "../themes/commonStyles";

const ProfileSettings = () => {
  return (
    <Box sx={flexCenter}>
      <Link href="#"> Become a Host</Link>
      <Stack>
        <Button>
          <BsGlobe size={24} />
        </Button>
        <Button
          sx={{
            borderRadius: 10,
            border: "1px solid #ddd",
          }}
        >
          <Stack>
            <AiOutlineMenu size={24} />
            <FaRegUserCircle size={24} />
          </Stack>
        </Button>
      </Stack>
    </Box>
  );
};

export default ProfileSettings;
