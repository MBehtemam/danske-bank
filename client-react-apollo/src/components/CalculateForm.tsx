import React, {ReactText, useState} from 'react'
import {gql, useLazyQuery} from '@apollo/client'
import Row from '../elements/Row'
import Col from '../elements/Col'
import Section,{SectionHeader} from '../elements/Section'
import Alert, { AlertType } from '../elements/Alert'
import Button from '../elements/Button'
import TextField from '../elements/TextField'

const GET_RESULT = gql`
  query GET_RESULT($input:Int!) {
    result(input: $input)
  }
`

function CalculateForm(){
    const [input, setInput] = useState<number>(0)
    const [getResult,{loading, data, error}] = useLazyQuery(GET_RESULT)
    const [inputError, setInputError] = useState("")
    const validateInput = (value:any) => {
      const parsedValue = parseInt(value,10);
      if(isNaN(parsedValue)){
        setInputError('please fill the input by number between 1 to 10');
        return false;
      }else if(parsedValue < 1 || parsedValue > 10){
        setInputError('value should be between 1 to 10');
        return false;
      }else {
        setInput(parsedValue);
        setInputError('');
        return true;
      }
    }
    const calculate = () => {
      if(validateInput(input)){
        getResult({
          variables:{
            input
          }
        })
      }
    }
    return <Row>
    <Col colWidth={2}>
      <Section>
        <SectionHeader>Some Personal information</SectionHeader>
        <TextField
          isRequired={true}
          hasError={inputError ? true : false}
          error="You should put number between 1 to 10"
          label="Your Secret Number [1-10]"
          onChange={e=> setInput(parseInt(e.target.value,10))}
        />
        {error ? <Alert type={AlertType.WARNING}>{error.message}</Alert>:null}
        <Button isLoading={loading} disabled={loading} onClick={()=> calculate()}>
          Calculate
        </Button>
      </Section>
    </Col>
    <Col colWidth={2}>
      <Section>
        <SectionHeader>Result</SectionHeader>
        { (!loading && !inputError && data) ? <span>Result is : {data.result}</span> : <p>You don't have any information here</p>}
      </Section>
    </Col>
  </Row>
}
export default CalculateForm