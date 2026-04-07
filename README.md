# InfnetFood App

## 1. Descrição do Projeto

O **InfnetFood** é um aplicativo de pedidos de comida desenvolvido em **React Native** usando **Expo**. Ele permite que usuários:

- Visualizem cardápio de restaurantes do centro do Rio de Janeiro.  
- Adicionem itens ao carrinho.  
- Realizem checkout e enviem pedidos.  
- Visualizem restaurantes no Google Maps.  

O app foi desenvolvido como um projeto de estudo e demonstra o uso de **navegação, animações, WebView e notificações** no React Native.

## 2. Como Usar o Aplicativo

### Abrir o App
Rodando via Expo (emulador ou celular pelo QR Code), você acessa a tela inicial com o cardápio.

### Visualizar Cardápio
Cada restaurante tem uma lista de produtos com **nome, preço e imagem**.

### Adicionar ao Carrinho
- Clique em **“Adicionar”** para incluir o item no carrinho.  
- O carrinho mostra todos os itens adicionados, quantidade e preço total.

### Checkout
- Na tela de checkout, revise os itens e clique em **“Pagar”**.  
- Ao finalizar, o pedido é enviado (simulação) e você recebe uma **notificação de confirmação**.

### Visualizar no Mapa
- Em cada restaurante, existe a opção **“Ver no mapa”**.  
- Ao clicar, o **Google Maps** é aberto com a localização do restaurante.

## 3. Tecnologias e Funcionalidades Usadas

- **React Native** → Base do aplicativo.  
- **Expo** → Facilita execução, desenvolvimento e notificações.  
- **React Navigation** → Navegação entre telas (Home, Carrinho, Checkout, Mapa).  
- **Expo Notifications** → Notificações de pedido enviado.  
- **WebView / Linking** → Abrir URLs externas, como o Google Maps.  
- **Animated, ScrollView, TouchableOpacity** → Criação de interface interativa e responsiva.