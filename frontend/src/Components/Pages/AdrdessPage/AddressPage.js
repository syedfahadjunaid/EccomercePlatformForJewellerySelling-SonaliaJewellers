import React from "react";
import "./AddressPage.css";
import AddressCard from "../../Cards/AddressCard/AddressCard";
import { Backdrop, Box, Fade, Modal } from "@mui/material";
function AdrdessPage() {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: '90%',
    bgcolor: "background.paper",
    border: "2px solid #fff",
    boxShadow: 24,
    p: 4,
    outline: "0",
    borderRadius: "5px",
  };
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="addresspage">
      <div className="addresspage_heading">
        <h3>Address</h3>
      </div>
      <div className="addresspage_cards">
        <AddressCard />
      </div>
      <div className="addresspage_addbutton">
        <button onClick={handleOpen}>Add Address</button>
      </div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <div className="addnewaddress">
              <div className="addnewaddress_heading">
                <h3>Shipping Address</h3>
              </div>
              <div className="addnewaddress_form">
                <form>
                  <div className="addnewaddress_form_fullname">
                    <p>Full name *</p>
                    <span>
                      <input type="text" placeholder="Enter your full name" />
                    </span>
                  </div>
                  <div className="addnewaddress_form_div">
                    <span>
                      <p>Email address *</p>
                      <input
                        type="text"
                        placeholder="Enter your full  email  address"
                      />
                    </span>
                    <span>
                      <p>Confirmation email *</p>
                      <input
                        type="text"
                        placeholder="Enter your full Confirmation email"
                      />
                    </span>
                  </div>
                  <div className="addnewaddress_form_div">
                    <span>
                      <p>Phone number *</p>
                      <input
                        type="text"
                        placeholder="Enter your full Phone number (only Digits)"
                      />
                    </span>
                    <span>
                      <p>Street name and house number *</p>
                      <input
                        type="text"
                        placeholder="Enter your Street name and house number"
                      />
                    </span>
                  </div>
                  <div className="addnewaddress_form_div">
                    <span>
                      <p>City*</p>
                      <input type="text" placeholder="City" />
                    </span>
                    <span>
                      <p>postal code *</p>
                      <input type="text" placeholder="zip code" />
                    </span>
                  </div>
                  <div className="addnewaddress_form_button">
                    <button>Add Address</button>
                  </div>
                </form>
              </div>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

export default AdrdessPage;
