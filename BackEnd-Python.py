#.\venv\Scripts\activate
#rapid.api
#gypth
#firebase data
#uvicorn main:app --reload

import requests
import json
from typing import Optional,List
from fastapi import FastAPI, Header ,UploadFile,File
import spacy 
import os
import imageio
import time
from fastapi.responses import FileResponse #Importação para tratamento de arquivo



app = FastAPI()

@app.get("/desejogif")
def inicio():
 return AnalisarTudoEretornaGif("Estou muito Feliz")

@app.get("/pesquisar/{palavra}")
def read_item(palavra: Optional[str] = Header(None)):
    return AnalisarTudoEretornaGif(palavra)
@app.get("/Teste")
def testandoMesmo():
    return "Boas Vindas";
    
@app.get("/pesquisarImagem/{palavra}")
def read_item(palavra: Optional[str] = Header(None)):
    return AnalisaTudoEretornaImagem(palavra)
    
@app.post("/arquivo")
def ReceberArquivo(files:List[UploadFile]=File(...)):
 return ArmazenandoAsImagens(files);

@app.get("/chamando")
def Analizando():
    return "Isptec-2021";

def AnalisarTudoEretornaGif(texto):
    return buscarGiff((AnalisarSentimento(texto)))

def AnalisaTudoEretornaImagem(texto):
    return buscarImagem((AnalisarSentimento(texto)))

def AnalisarSentimento(palavra):
    nlp = spacy.load("pt_core_news_sm")
    doc = nlp(palavra)
    for token in doc:
        if(token.dep_=="ROOT"):
         return token.text

def Traduzir(frase):
    url = "https://google-translate1.p.rapidapi.com/language/translate/v2"
    payload = "q="+frase+"&target=en&source=pt"
    headers = {
        'content-type': "application/x-www-form-urlencoded",
        'accept-encoding': "application/gzip",
        'x-rapidapi-key': "87c0e04185mshe6bdeef9236d559p1b6170jsnbf982b1535cf",
        'x-rapidapi-host': "google-translate1.p.rapidapi.com"
        }

    response = requests.request("POST", url, data=payload, headers=headers)
    resposta=response.json();
    resposta=resposta['data']['translations'];
    return(resposta[0]['translatedText'])


def buscarGiff(sentimentoEmQuestao):
    GIF='https://api.giphy.com/v1/gifs/search?api_key=LC122mPAykedUbN1dUybwn2HwB1AB2oZ&q='+sentimentoEmQuestao+'&limit=6';
    resposta = (requests.get(GIF))
    resposta = resposta.json()
    if(resposta['meta']['status']==200):
        gifs=[];
        for item in resposta['data']:
            gifs.append(item['images']['original']);
        return gifs
    else:
        return (resposta['meta']['status'])


def buscarImagem(sentimentoEmQuestao):
    GIF='https://pixabay.com/api/?key=21572960-67f1d8a003af299b8609c16b0&q='+sentimentoEmQuestao+'&image_type=photo&per_page=30';
    resposta = (requests.get(GIF))
    resposta = resposta.json()
    return resposta['hits'];

def ArmazenandoAsImagens(imagens:File(...)):
    EliminarTodasImagens()
    for PosicaoDaImagem in range (0,len(imagens)):
             imagemSelecionada=imagens[PosicaoDaImagem]
             nomeAleatorioImagem =os.path.basename(imagemSelecionada.filename)
             open("Imagem/"+nomeAleatorioImagem, 'wb').write(imagemSelecionada.file.read())

    return GerarImagemGif();
    

def EliminarTodasImagens():
    caminhoDaPasta='Imagem/'
    imagens=os.listdir(caminhoDaPasta)
    for PosicaoDaImagem in range (0,len(imagens)):
        os.remove(caminhoDaPasta+imagens[PosicaoDaImagem]);
    
    EliminarTodasImagensGifsGuardadas();

def EliminarTodasImagensGifsGuardadas():
    caminhoDaPasta='Resultado/'
    imagens=os.listdir(caminhoDaPasta)
    for PosicaoDaImagem in range (0,len(imagens)):
        os.remove(caminhoDaPasta+imagens[PosicaoDaImagem]);

def GerarImagemGif():
    caminhoDaPasta='Imagem/'
    imagens=os.listdir(caminhoDaPasta)
    lista_imagens=[] 
    tempoEmQueSeCriou = str(round(time.time() * 1000))
    nomeDoGifFinal=tempoEmQueSeCriou+".gif";
    pastaDestinoGif="Resultado/";
    for PosicaoDaImagem in range (0,len(imagens)):
             nomeArquivo=imagens[PosicaoDaImagem]
             caminhoDaImagem=caminhoDaPasta+nomeArquivo
             ler_imagem=imageio.imread(caminhoDaImagem)
             lista_imagens.append(ler_imagem)
             imageio.mimsave(pastaDestinoGif+nomeDoGifFinal, lista_imagens, format='GIF', duration=0.5,fps=55)

    return FileResponse(pastaDestinoGif+nomeDoGifFinal);