import Image from "next/image";
import { Header } from "./components/Header";
import { CampaignSection } from "./components/CampaignSection";
import { MotivationsSection } from "./components/MotivationsSection ";
import { HeroSection } from "./components/LayoutHero";
import { ContributionSection } from "./components/ContributionSection";
import GoalRaisedSection from "./components/GoalRaisedSection";
import ContributorsSlider from "./components/ContributorsSlider";
import { AboutArena } from "./components/AboutArena";
import { TimelineSection } from "./components/TimelineSection";
import { Ambassadors } from "./components/Ambassadors";
import { Committee } from "./components/Committee";
import FAQSection from "./components/FAQSection";
import Footer from "./components/Footer";

const contributors = [
  { name: "Ana Beatriz Souza", city: "São Paulo", state: "SP" },
  { name: "Carlos Eduardo Silva", city: "Rio de Janeiro", state: "RJ" },
  { name: "Juliana Martins", city: "Belo Horizonte", state: "MG" },
  { name: "Fernando de Oliveira", city: "Porto Alegre", state: "RS" },
  { name: "Marcos Antônio Pereira", city: "Salvador", state: "BA" },
  { name: "Luciana Freitas Almeida", city: "Recife", state: "PE" },
  { name: "Roberto Carlos Lima", city: "Fortaleza", state: "CE" },
  { name: "Mariana Costa Neves", city: "Manaus", state: "AM" },
  { name: "Tiago Ramos Nogueira", city: "Curitiba", state: "PR" },
  { name: "Patrícia Rocha Fonseca", city: "Natal", state: "RN" },
  { name: "Luiz Fernando Barros", city: "Vitória", state: "ES" },
  { name: "Sandra Regina Goulart", city: "Goiânia", state: "GO" },
  { name: "Rodrigo Santana", city: "Campo Grande", state: "MS" },
  { name: "Simone Azevedo Souza", city: "São Luís", state: "MA" },
  { name: "Alexandre Duarte Costa", city: "Cuiabá", state: "MT" },
  { name: "Ricardo Tavares", city: "Maceió", state: "AL" },
  { name: "Cláudia Miranda", city: "Aracaju", state: "SE" },
  { name: "Danilo Nonato", city: "Palmas", state: "TO" },
  { name: "Eva Nonato", city: "Belém", state: "PA" },
  { name: "Renata Carvalho", city: "João Pessoa", state: "PB" },
  { name: "Isabela Montenegro", city: "Teresina", state: "PI" },
  { name: "Heitor Lourenço", city: "Macapá", state: "AP" },
  { name: "Lucio Fonseca", city: "Boa Vista", state: "RR" },
  { name: "Vanessa Lins", city: "Porto Velho", state: "RO" },
  { name: "Samuel Figueredo", city: "Uberaba", state: "MG" },
  { name: "Caroline Dias", city: "Florianópolis", state: "SC" },
  { name: "Gisele Barros", city: "Caxias do Sul", state: "RS" },
  { name: "Anderson Júlio", city: "Blumenau", state: "SC" },
  { name: "Rafaela Silveira", city: "Campinas", state: "SP" },
  { name: "Felipe Rocha", city: "Pelotas", state: "RS" },
  { name: "Bianca Castro", city: "Londrina", state: "PR" },
  { name: "César Augusto", city: "Bauru", state: "SP" },
  { name: "Diana Lorena", city: "Pelotas", state: "RS" },
  { name: "Eduardo Rezende", city: "Joinville", state: "SC" },
  { name: "Fábio Lopes", city: "Juiz de Fora", state: "MG" },
  { name: "Graziela Souza", city: "Santos", state: "SP" },
  { name: "Henrique Nunes", city: "Nova Iguaçu", state: "RJ" },
  { name: "Igor Fernando", city: "Campo Grande", state: "MS" },
  { name: "Joana Amaral", city: "Osasco", state: "SP" },
  { name: "Kleber Machado", city: "Contagem", state: "MG" },
  { name: "Leandro Costa", city: "Serra", state: "ES" },
  { name: "Mauro César", city: "Vila Velha", state: "ES" },
  { name: "Nívea Stelmann", city: "Cariacica", state: "ES" },
  { name: "Olívia Pereira", city: "São Gonçalo", state: "RJ" },
  { name: "Paula de Andrade", city: "Duque de Caxias", state: "RJ" },
  { name: "Quirino Ribeiro", city: "Niterói", state: "RJ" },
  { name: "Rosa Maria", city: "São João de Meriti", state: "RJ" },
  { name: "Silvia Pinheiro", city: "Belford Roxo", state: "RJ" },
  { name: "Túlio Maravilha", city: "São José dos Campos", state: "SP" },
  { name: "Ubiratan Dantas", city: "São Vicente", state: "SP" },
  { name: "Viviane Araújo", city: "Mogi das Cruzes", state: "SP" },
];
export default function Home() {
  return (
    <main data-v-5dcda68c className="main overflow-hidden">
      <Header />
      <HeroSection />
      <CampaignSection />
      <MotivationsSection />
      <ContributionSection />
      <GoalRaisedSection
        amountRaised="R$ 19.630.728,19"
        lastUpdate="30/11/2024 às 17:40"
        nextUpdate="30/11/2024 às 17:50"
        goalAmount="R$ 700.000.000,00"
      />
      <ContributorsSlider contributors={contributors} />
      <AboutArena />
      <TimelineSection />
      <Ambassadors />
      <Committee />
      <FAQSection />
      <Footer />
    </main>
  );
}
