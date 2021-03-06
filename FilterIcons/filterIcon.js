import React from 'react'
import babygirl from '../../../../images/Clothbabys/face_baby_girl.svg';
import styled from '@emotion/styled';

const FilterIcons = () => {
    return (
        <Contenedor>
		<form action="">
			<Selectbox>
				<Select id="select">
					<Text>
						<h1>Selecciona tu pais</h1>
						<p>Lorem ipsum dolor sit.</p>
					</Text>
					<i class="fas fa-angle-down"></i>
				</Select>

				<Options active id="opciones">
					<a href="#" class="opcion">
						<ContentOption>
							<img src={babygirl} alt="bbg" width='25'/>
							<Text>
								<h1>bebe recien nacido mujer</h1>
								<p>Lorem ipsum dolor sit.</p>
							</Text>
						</ContentOption>
					</a>

					<a href="#" class="opcion">
						<ContentOption>
							<img src={babygirl} alt="bbb" width='25'/>
							<Text>
								<h1>bebe recien nacido mujer</h1>
								<p >Dignissim hendrerit odio rhoncus.</p>
							</Text>
						</ContentOption>
					</a>
				</Options>
			</Selectbox>

			<input type="hidden" name="pais" id="inputSelect" value=""/>
		</form>

	</Contenedor>
      );
}
 
const Contenedor = styled.div` 
    width: 90%;
    max-width: 1000px;
    margin: auto;
    padding: 40px 0;
`;
const Selectbox = styled.div` 
    width: 50%;
	margin: auto;
	position: relative;
    @media screen and (max-width: 800px){
        {
            width: 100%;
        }
    }
`;
const Select = styled.div` 
    background: #fff;
    width: 100%;
    box-shadow: 0px 0px 0px rgba(0, 0, 0, .16);
    border-radius: 10px;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: .2s ease all;
    margin-bottom: 30px;
    padding: 30px;
    position: relative;
    z-index: 200;
    border: 2px solid transparent;
    .select.active,
    :hover {
        box-shadow: 0px 5px 10px rgba(0, 0, 0, .16);
        border: 2px solid #213f8f;
    }

    .active:before {
        content: "";
        display: block;
        height: 0;
        width: 0;
        border-top: 15px solid #213f8f;
        border-right: 15px solid transparent;
        border-bottom: 15px solid transparent;
        border-left: 15px solid transparent;
        position: absolute;
        bottom: -30px;
        left: calc(50% - 15px);
    }
    i {
        font-size: 30px;
        margin-left: 30px;
        color: #213f8f;
    }
`;
const Options = styled.div` 
    background: #fff;
    border-radius: 10px;
    box-shadow: 0px 5px 10px rgba(0,0,0,.16);
    max-height: 400px;
    overflow: auto;
    z-index: 100;
    width: 100%;
    display: none;
    .active {
        display: block;
        animation: fadeIn .3s forwards;
    }
`;
const ContentOption = styled.div` 
    width: 100%;
    display: flex;
    align-items: center;
    transition: .2s ease all;
    img {
        width: 60px;
        height: 60px;
        margin-right: 30px;
    }
    :hover {
        background: #213F8F;
    }
    
`;
const Text = styled.div` 
    
    h1{
        margin-bottom: 10px;
        color: #000;
        font-weight: 600;
        font-size: 30px;
    } 
    p{
        font-size: 18px;
        color: #434343;
    }
        
`;
const descripcion = styled.div` 
    font-size: 18px;
    color: #434343;
    
`;
export default FilterIcons;