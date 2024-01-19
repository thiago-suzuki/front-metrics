import { FC, useState } from 'react'
import { Button, Container, Title, TitleGraphic } from './styles'
import ChurnRateChart from '../../components/ChurnRateChart';
import { ChartLine } from 'phosphor-react';
import MonthlyRecurringRevenueChart from '../../components/MonthlyRecurringRevenueChart';
import axios from 'axios';
import { environment } from '../../environments/environments';

const Principal: FC = () => {
    const [dataMrr, setDataMrr] = useState([])
    const [dataRate, setDataRate] = useState([])


    async function selectFile(e: Event) {
        const inputElement = e.target as HTMLInputElement;
        const selectedFile = inputElement.files && inputElement.files[0];
        if(selectedFile) {
            const response = await axios.post(`${environment.apiUrl}/charge/metrics`, {xlsx_file: selectedFile}, {
                headers: {
                  'Content-Type': 'multipart/form-data',
                },
            })
            setDataMrr(response.data.mrrArr)
            setDataRate(response.data.churnRateArr)
        }
    }

    async function importSheet() {
        const input = document.createElement('input');
        input.type = 'file';
        input.style.display = 'none';
    
        input.addEventListener('change', (e) =>
           selectFile(e)
        );

        document.body.appendChild(input);
        try {
          await input.click();
        } catch (error) {
          console.error(error);
        }
    
        document.body.removeChild(input);
    }

    function reset() {
        setDataMrr([]);
        setDataRate([]);
    }

    return (
        <Container>
            <Title>
                <ChartLine size={48} color='green' /> Visualização de Métricas
            </Title>
            <br />

            <div style={{ display: 'flex', justifyContent: 'center', gap:'20px' }}>
                <Button onClick={importSheet}>Importar Planilha</Button>
                <Button onClick={reset}>Resetar</Button>
            </div>

            <br />
            <br />
            <br />

            <div style={{ display: 'flex', justifyContent: 'center',  gap:'20px' }}>
                <div>
                    <TitleGraphic>Churn Rate por Mês/Ano</TitleGraphic>
                    <ChurnRateChart data={dataRate} />
                </div>
                <div>
                    <TitleGraphic>MRR por Mês/Ano</TitleGraphic>
                    <MonthlyRecurringRevenueChart data={dataMrr}/>
                </div>
            </div> 
        </Container>
    )
}

export default Principal