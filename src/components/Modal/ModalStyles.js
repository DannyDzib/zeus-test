const styles = {
  dialog: {
    '&.MuiDialog-paper': {
      borderRadius: 16,
      backgroundColor: 'red',
    },
  },
  contentTitle: {
    display: 'flex',
    p: 2,
    pb: 1,
    justifyContent: 'flex-end',
  },
  closeButton: {
    color: 'text.black',
    width: 40,
    height: 40,
    mt: -1,
    mr: -1,
  },
  borderBotton: { borderBottom: ' 1px solid #E9E9E9' },
  closeIcon: { fontSize: 20 },
  contentBody: {
    pt: 0,
  },
  title: {
    fontSize: '18px !important',
    fontWeight: '600 !important',
    lineHeight: '22px !important',
    color: 'text.primaryDark',
    width: '100%',
  },
}

export default styles
