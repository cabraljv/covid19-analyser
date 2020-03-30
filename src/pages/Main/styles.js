import styled from 'styled-components';
import bg from '../../assets/images/3.png'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    footer{
        width: 100%;
        background: #F44242;
        color: #fff;
        margin-top: 50px;
        display: flex;
        p{
            font-weight: normal;
            padding: 55px;
            a{
                color: #fff;
                text-decoration: none;
            }
            a:hover{
                color: #888;
            }
        }
    }
  header{
      width: 100%;
      height: 300px;
      background: #000;
      display: flex;
      @media (min-width: 300px){
        h1{
            color: #fff;
            margin: auto;
            z-index: 5;
            font-size: 36px;
            font-family: 'Work Sans';
        }
      }
      @media (min-width: 600px){
        h1{
            color: #fff;
            margin: auto;
            z-index: 5;
            font-size: 72px;
            font-family: 'Work Sans';
        }
      }
      
      div{
          width: 100%;
          height: 100%;
          background-image: url(${bg});
          display: flex;
          opacity: 0.3;
          position: absolute;
          height: 300px;
          background-size:cover;
          background-repeat:no-repeat;
          
      }
  }
  section#about{
      
      display: grid;
      @media (min-width: 300px){
        grid-template-columns: 1fr;
        div{
            margin: 10px 50px;
            img{
                margin-top: 0;
            }
        }
      }
      @media (min-width: 600px){
        grid-template-columns: 3fr 2fr;
      }
      @media (min-width: 1920px){
          width: 1700px;
          margin: auto;
      }
      div{
          display: flex;
          flex-direction: column;
          h2{
              
              font-weight: normal;
              color: #F44242;
          }
          @media (min-width: 300px){
                margin: 10px 55px;
                h2{
                    font-size: 2em;
                }
          }
          @media (min-width: 600px){
                margin:55px;
                h2{
                    font-size: 3em;
                }
          }
          margin-bottom: 5px;
          img{
              width: 90%;
              margin: auto;
              @media (min-width: 300px){
                margin-top: 0;
              }
              
              border-radius: 15px;
          }
          p{
              color: #2B2B2B;
              padding: 10px;
              padding-left: 0;
          }
          p.font{
              margin-left: auto;
              font-size: 0.7em;
              color: #6A6A6A;
          }
      }
      
  }
`;
export const MapSection = styled.div`
    @media (min-width: 300px){
        margin: 0;
        h2{
            padding-left: 55px;
            font-size: 2em;
        }
    }
    @media (min-width: 600px){
        margin: 55px;
        h2{
            font-size: 3em;
            padding-left: 0px;
        }
    }
    h2{
        
        font-weight: normal;
        color: #F44242;
        padding-bottom: 15px;
        padding-top: 10px;
    }
    div#map-container{
        width: 100%;
        height: 500px;
        
    }
`;
export const MapPoint = styled.div`
    cursor: pointer;
    transform: translate( ${props=>(props.size/2)}px, ${props=>(props.size/2)})px;
    img{
        height: ${props=>props.size}px;
        width: ${props=>props.size}px;
    }
    div{
        background: #fff;
        z-index: 10;
        width: 170px;
        height: 50px;
        display: ${props=>(props.show ? 'flex': 'none')};
        transition: .3s ease;
        transform: translate(0px, -90px);
        border-radius: 5px;
        position: relative;
        p{
            font-size: 1.2em;
            margin: auto;
        }
        button{
            border: 0;
            background: none;
            img{
                height: 9px;
            }
            position: absolute;
            top: 2px;
            right: 2px;   
            cursor: pointer;
        }
        button:focus{
            outline: none;
        }
    }
`;
export const ChartSection = styled.div`
    width: 100%;

    @media (min-width: 300px){
            section{
                display: flex;
                flex-direction: column-reverse;
                width: 100%;
                overflow-x: scroll;
                div#grafico{
                    
                    margin-right: 30px;
                    
                }
            }
            
            
            div#select{
                width: 150px;
                margin: 10px auto;
                
            }
            h2{
                font-size: 2em;
                font-weight: normal;
                color: #F44242;
                padding-bottom: 15px;
                padding-top: 10px;
                padding-left: 55px;
            }
                
    }
    @media (min-width: 600px){
            section{
                display: flex;
                flex-direction: row;
                overflow-x: hidden;
                div#grafico{
                    width: 80%;
                    padding: 5px 55px;
                    padding-right: 0;
                }
            }
            
            
            div#select{
                width: 150px;
                margin-left: auto;
                margin-right: 55px;
            }
            h2{
                font-size: 3em;
                font-weight: normal;
                color: #F44242;
                padding-bottom: 15px;
                padding-top: 10px;
                padding-left: 55px;
            }
        
    }   
`;
export const DeathChartSection = styled.div`
    width: 100%;
    margin-top: 50px;
    @media (min-width: 300px){
            section{
                display: flex;
                flex-direction: column-reverse;
                width: 100%;
                overflow-x: scroll;
                div#grafico{
                    
                    margin-right: 30px;
                    
                }
            }
            
            
            div#select{
                width: 150px;
                margin: 10px auto;          
            }
            h2{
                font-size: 2em;
                font-weight: normal;
                color: #F44242;
                padding-bottom: 15px;
                padding-top: 10px;
                padding-left: 55px;
            }
                
    }
    @media (min-width: 600px){
            section{
                display: flex;
                flex-direction: row;
                overflow-x: hidden;
                div#grafico{
                    width: 80%;
                    padding: 5px 55px;
                    padding-right: 0;
                }
            }
            
            
            div#select{
                width: 150px;
                margin-left: auto;
                margin-right: 55px;
            }
            h2{
                font-size: 3em;
                font-weight: normal;
                color: #F44242;
                padding-bottom: 15px;
                padding-top: 10px;
                padding-left: 55px;
            }
        
    }
    
    
    
`;
