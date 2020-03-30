import React,{useEffect,useState} from 'react';

import { Container, MapSection,MapPoint,ChartSection } from './styles';
import corona from '../../assets/images/2.png'
import GoogleMaps from 'google-map-react';
import biohazard from '../../assets/icons/biohazard.svg'
import closeIcon from '../../assets/icons/close.svg'
import axios from 'axios'
import Select from 'react-select'
import api_keys from '../../keys'

import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  } from 'recharts';

export default function Main() {    
    const [mapData,setMapData] = useState([]);
    const [openInfo, setOpenInfo] = useState(-1);
    const [graphData,setGraphData] = useState([]);
    const [inUseChart, setInUseChart] = useState();
    const states = [
        { value: 'TOTAL', label: 'TOTAL' },
        { value: 'MG', label: 'MG' },
        { value: 'SP', label: 'SP' },
        { value: 'RJ', label: 'RJ' },
        { value: 'BA', label: 'BA' },
        { value: 'PE', label: 'PE' },
        { value: 'DF', label: 'DF' },
        { value: 'RS', label: 'RS' },
        { value: 'RO', label: 'RO' },
        { value: 'AC', label: 'AC' },
        { value: 'AM', label: 'AM' },
        { value: 'RR', label: 'RR' },
        { value: 'PA', label: 'PA' },
        { value: 'AP', label: 'AP' },
        { value: 'TO', label: 'TO' },
        { value: 'MA', label: 'MA' },
        { value: 'PI', label: 'PI' },
        { value: 'CE', label: 'CE' },
        { value: 'RN', label: 'RN' },
        { value: 'PB', label: 'PB' },
        { value: 'AL', label: 'AL' },
        { value: 'SE', label: 'SE' },
        { value: 'ES', label: 'ES' },
        { value: 'SC', label: 'SC' },
        { value: 'PR', label: 'PR' },
        { value: 'GO', label: 'GO' },
    ]
    
    useEffect(()=>{
        async function getInfo(){    
            const url_api = 'https://raw.githubusercontent.com/wcota/covid19br/master/cases-gps.csv'
            const api_response = await axios.get(url_api);
            const response = api_response.data;
            var lines=response.split("\n");
            var cases=[];
            for(let i=1;i<lines.length;i++){
                var data_city = lines[i].split(',');
                var item_size = 0
                if(lines[i]!==''){
                    if(i===1){
                        item_size=55;
                    }else{
                        item_size =  (90 * parseInt(data_city[4]))/parseInt(lines[1].split(',')[4]);
                        if(item_size<15){
                            item_size=15;
                        }
                    }
                    
                    cases.push({city: data_city[1], lat: data_city[2], lng: data_city[3], cases: data_city[4], size: item_size})
                }
                
            }
            const url_api_time = 'https://raw.githubusercontent.com/wcota/covid19br/master/cases-brazil-states.csv'
            const api_response_time = await axios.get(url_api_time);
            const response_time = api_response_time.data;
            lines=response_time.split("\n");
            var cases_time=[];
            for(let i=1;i<lines.length;i++){
                let data_city = lines[i].split(',');
                if(lines[i]!==''){       
                    cases_time.push({date: data_city[0], state: data_city[2], cases: data_city[6]})
                }
                
            }

            setGraphData(cases_time)
            setMapData(cases)
 
                 
        }
        getInfo();
        
        
    },[])
    const setGraphScope = uf=>{

        var new_data = [];
        var data_atual=''
        
        for(let i=0;i<graphData.length;i++){
            var date = graphData[i].date.replace('2020-','');
            date=date.split('-')
            date = date[1]+'/'+date[0]
            if(graphData[i].state===uf.value){
                if(data_atual!==date){
                    new_data.push({date: date, cases:graphData[i].cases, uf:graphData[i].state  })
                }else{
                    new_data[new_data.length-1].cases+=graphData[i].cases;
                }
            }
        }
        setInUseChart(new_data);
    }
    useEffect(()=>{
        var new_data = [];
        var data_atual=''
        
        for(let i=0;i<graphData.length;i++){
            var date = graphData[i].date.replace('2020-','');
            date=date.split('-')
            date = date[1]+'/'+date[0]
            if(graphData[i].state==='TOTAL'){
                if(data_atual!==date){
                    new_data.push({date: date, cases:graphData[i].cases, uf:graphData[i].state  })
                }else{
                    new_data[new_data.length-1].cases+=graphData[i].cases;
                }
            }
        }
        setInUseChart(new_data); 
    },[graphData])
   
    const getGraphHeight = ()=>{
        try{
            return(parseInt(inUseChart[inUseChart.length-1].cases)+100);
        }catch(error){
            return 1000;   
        }
            
        
             
    }
    return (
    <Container>
        <header>
        <h1>Covid-19 Analyser</h1>
            <div>
            </div>     
        </header>
        <section id="about">
            <div>
                <h2>Sobre</h2>
                <p>
                    Coronavírus é uma família de vírus que causam infecções respiratórias. O novo agente do coronavírus foi descoberto em 31/12/19 após casos registrados na China. Provoca a doença chamada de coronavírus (COVID-19).
                </p>
                <p>
                Os primeiros coronavírus humanos foram isolados pela primeira vez em 1937. No entanto, foi em 1965 que o vírus foi descrito como coronavírus, em decorrência do perfil na microscopia, parecendo uma coroa.
                </p>
                <p>
                A maioria das pessoas se infecta com os coronavírus comuns ao longo da vida, sendo as crianças pequenas mais propensas a se infectarem com o tipo mais comum do vírus. Os coronavírus mais comuns que infectam humanos são o alpha coronavírus 229E e NL63 e beta coronavírus OC43, HKU1...
                </p>
                <p className='font'>
                fonte: coronavirus.saude.gov.br
                </p>
            </div>
            <div>
                <img src={corona} alt='corona' />
                <p className='font'>
                    Coronavírus - imagem produzida digitalmente
                </p>
            </div>
        </section>
        <MapSection>
            <h2>Covid-19 no Brasil</h2>
            <div id="map-container">
                <GoogleMaps
                    bootstrapURLKeys={{ key: api_keys.MAPS_KEY }}
                    defaultCenter={{
                        lat: -15.7795,
                        lng: -47.9297
                        }}
                    defaultZoom={4}
                    
                >
                    {
                        mapData.map((item,index)=>(
                            <MapPoint
                                lat= {item.lat}
                                lng= {item.lng}  
                                show={openInfo===index ? true:false}
                                size={item.size}
                                key={index}
                                onClick={()=>setOpenInfo(index)}
                            >
                                <img src={biohazard} alt='bio'/>
                                <div>
                                <p>{item.cases} casos<br/>{item.city}</p>
                                    <button onClick={()=>setOpenInfo(-1)}><img src={closeIcon} alt='Close'/></button>
                                </div>
                            </MapPoint>
                        ))
                    }
                    
                </GoogleMaps>
            </div>
        </MapSection>
        <ChartSection>
            <h2>Covid-19 por estado</h2>
            <section>
                <div id="grafico">
                <ResponsiveContainer width={'100%'} height={400}> 
                    <LineChart
                    data={inUseChart}
                    
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="date" />            
                        <YAxis dataKey="cases" type="number"  domain={[0,()=>getGraphHeight()]} />  
                        <Tooltip />
                        <Line type="monotone" dataKey="cases" stroke="#F44242" strokeWidth={2}/>
                    </LineChart>
                </ResponsiveContainer>
                </div>
                <div id='select'>
                    <Select 
                        options={states} 
                        defaultValue={{ value: 'TOTAL', label: 'TOTAL' }} 
                        onChange={uf=>setGraphScope(uf)}
                    />
                </div>
                
            </section>
            
           
        </ChartSection>
    </Container>
    );
}
