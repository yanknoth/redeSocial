import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Alert,
} from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Feather from "@expo/vector-icons/Feather";
import { useState } from "react";

let postagens = [
  {
    imagem: "youtube",
    texto:
      "Ae galera, saiu video novo no canal. Passa lá pra ver eu destruindo no portugol!🔮📺 \nyuoutube.com/devManoJuca \n#fullStackPortugol #portugolehprogramacao #respeitaosdev #tmj",
  },
  {
    imagem: "arrow-up-right",
    texto:
      "Cada linha de código é uma oportunidade para transformar lógica em realidade. Codando para criar o futuro. 💻✨ #DesenvolvimentoInovador",
  },
  {
    imagem: "cloud-off",
    texto:
      "Bug? Isso é apenas um quebra-cabeça esperando para ser resolvido. Encontrando soluções elegantes no mundo da programação. 🐛🔍 #DebuggingLife",
  },
  {
    imagem: "database",
    texto:
      "Na estrada da programação, cada erro é uma lição e cada desafio é uma chance de crescimento. A busca pela eficiência nunca para. ⚡👩‍💻 #CaminhoDoDev",
  },
  {
    imagem: "codesandbox",
    texto:
      "Linhas de código se tornam pontes entre a imaginação e a realidade digital. Construindo possibilidades infinitas com as mãos no teclado. 🌉💡 #ArquitetoDeCodigo",
  },
  {
    imagem: "coffee",
    texto:
      "Café, código, repetir. A rotina de um dev é uma dança constante entre criatividade e lógica. 🚀☕ #CodigoCriativo",
  },
  {
    imagem: "codepen",
    texto:
      "Só os devs entendem a satisfação de um código limpo e bem documentado. Aquela sensação de realização é imbatível. 📝✅ #CodigoElegante",
  },
  {
    imagem: "alert-triangle",
    texto:
      "No universo binário, os desafios se transformam em oportunidades para inovação. Codando hoje o mundo de amanhã. 🌐👨‍💻 #FuturoDoCodigo",
  },
  {
    imagem: "activity",
    texto:
      "Enxergando além das linhas de código, vislumbrando um ecossistema de tecnologia em constante evolução. 🌍📱 #VisaoTech",
  },
  {
    imagem: "award",
    texto:
      "A comunidade de desenvolvedores é como um vasto playground virtual, onde ideias se tornam colaborações e projetos incríveis. 🤝🌈 #ComunidadeDev",
  },
  {
    imagem: "aperture",
    texto:
      "Cada algoritmo é uma jornada de resolução de problemas, uma trilha para aprimorar habilidades e chegar a soluções brilhantes. 🗺️✨ #AlgoritmoExplorador",
  },
];

export default function App() {
  const [conteudoFeed, setConteudoFeed] = useState(<Feed />);

  function mostrarFeed() {
    setConteudoFeed(<Feed />);
  }

  function mostrarPerfil() {
    setConteudoFeed(<Perfil />);
  }

  function novoPost() {
    setConteudoFeed(<NovoPost />);
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={mostrarFeed}>
          <FontAwesome name="home" size={45} color="#7777ff" />
        </TouchableOpacity>
        <TouchableOpacity onPress={mostrarPerfil}>
          <FontAwesome name="user" size={45} color="#7777ff" />
        </TouchableOpacity>
        <TouchableOpacity onPress={novoPost}>
          <FontAwesome name="arrow-up" size={45} color="#7777ff" />
        </TouchableOpacity>
      </View>
      <View style={styles.feed}>
        <ScrollView>{conteudoFeed}</ScrollView>
      </View>
      <View style={styles.footer}></View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 35,
  },
  header: {
    backgroundColor: "#000000",
    height: 65,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  feed: {
    backgroundColor: "#7777ff",
    flex: 1,
    width: "100%",
  },

  footer: {
    backgroundColor: "#000000",
    height: 65,
    width: "100%",
  },
  textoPerfil: {
    fontSize: 20,
  },
  inputs: {
    borderWidth: 1,
    borderRadius: 5,
    width: 200,
    height: 25,
    backgroundColor: "#F2F2F2",
    marginBottom: 25,
    padding: 8,
  },
  inputMensagem: {
    borderWidth: 1,
    borderRadius: 5,
    width: 200,
    height: 120,
    backgroundColor: "#F2F2F2",
    marginBottom: 25,
    padding: 8,
  },

  textoInputs: {
    fontSize: 20,
    marginBottom: 10,
  },
  botao: {
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: "#f2f2f2",
    padding: 10,
  },
});

function Feed() {
  return (
    <View>
      {postagens.map((postagem, index) => (
        <Post imagem={postagem.imagem} texto={postagem.texto} key={index} />
      ))}
    </View>
  );
}

function Post(props) {
  return (
    <View style={{ alignItems: "center", padding: 25 }}>
      <Feather name={props.imagem} size={50} color="#ffff" />
      <Text style={styles.textoPerfil}>{props.texto}</Text>
    </View>
  );
}

function Perfil() {
  return (
    <View style={{ alignItems: "center", padding: 35 }}>
      <Feather name="image" size={200} color="#ffff" />
      <Text style={styles.textoPerfil}>Perfil</Text>
      <Feather name="inbox" size={100} color="#ffff" />
      <Text style={styles.textoPerfil}>Perfil</Text>
    </View>
  );
}
function NovoPost() {
  const [inputImagem, setInputImagem] = useState();
  const [inputTexto, setInputTexto] = useState();

  function cadastrar() {
    let postagem = {
      imagem: inputImagem,
      texto: inputTexto,
    };
    postagens.unshift(postagem);
    alert("Cadastro Feito");

    limparInputs();
  }
  function limparInputs() {
    setInputImagem("");
    setInputTexto("");
  }
  return (
    <View style={{ alignItems: "center", padding: 40 }}>
      <Text style={styles.textoInputs}>Nome da imagem</Text>
      <TextInput
        style={styles.inputs}
        value={inputImagem}
        onChangeText={setInputImagem}
      ></TextInput>
      <Text style={styles.textoInputs}>Texto</Text>
      <TextInput
        style={styles.inputMensagem}
        value={inputTexto}
        onChangeText={setInputTexto}
      ></TextInput>
      <TouchableOpacity style={styles.botao} onPress={cadastrar}>
        <Text style={styles.textobotao}>Cadastrar</Text>
      </TouchableOpacity>
    </View>
  );
}
