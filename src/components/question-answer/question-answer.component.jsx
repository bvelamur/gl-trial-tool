import './question-answer.styles.scss'
import {TextField, Typography} from '@material-ui/core'

const QuestionAnswer = ({QuestionText, ResponseLabel}) => (
    <div className="q-and-a">
        <span className='question'>
        <Typography variant='subtitle2'>{QuestionText}</Typography>
        </span>
        <TextField
            id="outlined-multiline-static"
            label={ResponseLabel}
            multiline
            rows={4}
            variant="outlined"
            fullWidth
        />
    </div>
);

export default QuestionAnswer;