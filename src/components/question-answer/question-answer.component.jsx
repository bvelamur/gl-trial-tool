import {TextField, Typography, Box} from '@material-ui/core'

const QuestionAnswer = ({QuestionText, ResponseLabel}) => (
    <Box p={4}>
        <Typography variant='h5'>{QuestionText}</Typography>
        <TextField
            id="outlined-multiline-static"
            label={ResponseLabel}
            multiline
            rows={4}
            variant="outlined"
            fullWidth
        />
    </Box>
);

export default QuestionAnswer;