import React from "react"
import Dialog from "@mui/material/Dialog"
import DialogContent from "@mui/material/DialogContent"
import DialogActions from "@mui/material/DialogActions"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import IconButton from "@mui/material/IconButton"
import CloseIcon from "@mui/icons-material/Close"
import { useModal } from "./hooks/useModal"
import sx from "./ModalStyles"

const Modal = () => {
  const { modalState, handleCloseModal } = useModal()
  const {
    show,
    title,
    body,
    actionButtons,
    isDismissible,
    configProps = {},
  } = modalState
  const {
    maxWidth,
    className,
    sxProps,
    showDividers,
    scroll,
    paperProps,
    titleAlign = "left",
    showClose,
    isDividerHeader = false,
    sxProp = {},
    ...otherProps
  } = configProps

  const paperWidth = !maxWidth ? { maxWidth: 288 } : {}
  const borderBotton = isDividerHeader ? sx.borderBotton : {}

  return (
    <Dialog
      open={show}
      aria-labelledby="app-modal"
      onClose={handleCloseModal}
      maxWidth={maxWidth}
      disableBackdropClick={isDismissible ? undefined : true}
      disableEscapeKeyDown={isDismissible ? undefined : true}
      scroll={scroll}
      sx={sx.dialog}
      PaperProps={{
        sx: { borderRadius: 4, ...paperWidth },
      }}
      {...otherProps}
    >
      <Box sx={{ ...sx.contentTitle, ...borderBotton }}>
        {title && (
          <Typography
            component="h2"
            sx={{ ...sx.title, ...sxProp.title }}
            align={titleAlign}
          >
            {title}
          </Typography>
        )}
        {showClose && (
          <IconButton sx={sx.closeButton} onClick={handleCloseModal}>
            <CloseIcon sx={sx.closeIcon} />
          </IconButton>
        )}
      </Box>
      <DialogContent sx={sx.contentBody} dividers={showDividers}>
        {body}
      </DialogContent>

      {actionButtons && <DialogActions>{actionButtons}</DialogActions>}
    </Dialog>
  )
}

export { Modal }
