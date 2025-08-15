import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-literary-parchment to-literary-cream">
      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 bg-literary-dark/5"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="mb-8">
            <Badge variant="secondary" className="mb-4 bg-literary-brown text-white px-6 py-2 text-lg">
              Ежегодное мероприятие
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold text-literary-dark mb-6 tracking-tight">
              Литературный Квиз
            </h1>
            <div className="flex items-center justify-center mb-6">
              <Icon name="BookOpen" size={32} className="text-literary-brown mr-3" />
              <h2 className="text-2xl md:text-3xl text-literary-brown font-light">
                от фонда "Живая Классика"
              </h2>
            </div>
            <p className="text-xl text-literary-dark/80 max-w-3xl mx-auto leading-relaxed">
              Собираем тысячи ребят по всей России для популяризации чтения среди детей и подростков. 
              Присоединяйтесь к нашему литературному празднику!
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-literary-brown hover:bg-literary-dark text-white px-8 py-4 text-lg">
              <Icon name="Users" size={20} className="mr-2" />
              Принять участие
            </Button>
            <Button variant="outline" size="lg" className="border-literary-brown text-literary-brown hover:bg-literary-brown hover:text-white px-8 py-4 text-lg">
              <Icon name="Info" size={20} className="mr-2" />
              Узнать больше
            </Button>
          </div>

          <div className="relative">
            <img 
              src="/img/890dfdb4-4a71-4027-bf2f-47945a2e64dd.jpg" 
              alt="Литературная атмосфера" 
              className="mx-auto rounded-2xl shadow-2xl max-w-2xl w-full"
            />
          </div>
        </div>
      </section>

      {/* About Quiz Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <Icon name="Trophy" size={48} className="text-literary-brown mx-auto mb-4" />
            <h2 className="text-4xl font-bold text-literary-dark mb-4">О квизе</h2>
            <p className="text-xl text-literary-dark/70 max-w-3xl mx-auto">
              Наш литературный квиз — это уникальная возможность для молодых людей 
              продемонстрировать знания русской и мировой классики
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-literary-brown/20 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <Icon name="Calendar" size={40} className="text-literary-brown mx-auto mb-2" />
                <CardTitle className="text-literary-dark">Ежегодно</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-lg">
                  Мероприятие проходит каждый год, собирая всё больше участников
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-literary-brown/20 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <Icon name="MapPin" size={40} className="text-literary-brown mx-auto mb-2" />
                <CardTitle className="text-literary-dark">По всей России</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-lg">
                  Участники из разных регионов России объединяются любовью к литературе
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-literary-brown/20 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <Icon name="Heart" size={40} className="text-literary-brown mx-auto mb-2" />
                <CardTitle className="text-literary-dark">Популяризация чтения</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-lg">
                  Главная цель — привить детям и подросткам любовь к книгам
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Organizer Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-literary-cream to-literary-parchment">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="outline" className="border-literary-brown text-literary-brown mb-4">
                Организатор
              </Badge>
              <h2 className="text-4xl font-bold text-literary-dark mb-6">
                Алина Скоробогатова
              </h2>
              <p className="text-xl text-literary-dark/80 mb-6 leading-relaxed">
                Амбассадор фонда "Живая Классика", педагог с многолетним опытом работы 
                с детьми и подростками. Алина посвятила свою карьеру развитию литературного 
                образования в России.
              </p>
              <div className="flex items-center space-x-6">
                <div className="flex items-center">
                  <Icon name="Award" size={20} className="text-literary-brown mr-2" />
                  <span className="text-literary-dark">Амбассадор фонда</span>
                </div>
                <div className="flex items-center">
                  <Icon name="GraduationCap" size={20} className="text-literary-brown mr-2" />
                  <span className="text-literary-dark">Педагог</span>
                </div>
              </div>
            </div>
            <div className="text-center">
              <img 
                src="/img/af7811ed-783e-4bff-af27-6353e5556731.jpg" 
                alt="Алина Скоробогатова" 
                className="rounded-2xl shadow-2xl mx-auto max-w-sm w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Foundation Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <Icon name="Building2" size={48} className="text-literary-brown mx-auto mb-4" />
            <h2 className="text-4xl font-bold text-literary-dark mb-4">О фонде "Живая Классика"</h2>
            <p className="text-xl text-literary-dark/70 max-w-4xl mx-auto leading-relaxed">
              Фонд "Живая Классика" — ведущая образовательная организация России, 
              которая занимается популяризацией чтения среди детей и подростков
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Icon name="Target" size={24} className="text-literary-brown mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-literary-dark mb-2">Миссия</h3>
                    <p className="text-literary-dark/70">
                      Возродить интерес к классической литературе среди молодого поколения
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Icon name="Users" size={24} className="text-literary-brown mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-literary-dark mb-2">Аудитория</h3>
                    <p className="text-literary-dark/70">
                      Дети и подростки от 10 до 17 лет по всей территории России
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Icon name="Star" size={24} className="text-literary-brown mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-literary-dark mb-2">Достижения</h3>
                    <p className="text-literary-dark/70">
                      Более 100,000 участников за годы существования проекта
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <Card className="bg-gradient-to-br from-literary-brown to-literary-dark text-white p-8">
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-2xl">Статистика участия</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">5000+</div>
                  <div className="text-literary-cream">Участников в этом году</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">85</div>
                  <div className="text-literary-cream">Регионов России</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">10</div>
                  <div className="text-literary-cream">Лет проведения</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Gallery of Achievements */}
      <section className="py-16 px-4 bg-gradient-to-b from-literary-parchment to-literary-cream">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <Icon name="Camera" size={48} className="text-literary-brown mx-auto mb-4" />
            <h2 className="text-4xl font-bold text-literary-dark mb-4">Галерея успехов</h2>
            <p className="text-xl text-literary-dark/70 max-w-3xl mx-auto">
              Яркие моменты наших литературных квизов и достижения участников
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-video overflow-hidden">
                <img 
                  src="/img/fd89b0a6-dd6d-4e4e-b7be-34edfdc105fe.jpg" 
                  alt="Участники квиза" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-literary-dark mb-2">Квиз 2023</h3>
                <p className="text-literary-dark/70">Более 3000 участников со всей России</p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <Icon name="Trophy" size={48} className="text-literary-brown mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-literary-dark mb-2">Награды</h3>
                <p className="text-literary-dark/70 mb-4">Победители получают ценные призы и сертификаты</p>
                <Badge className="bg-literary-brown text-white">500+ наград</Badge>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <Icon name="BookMarked" size={48} className="text-literary-brown mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-literary-dark mb-2">Книжный фонд</h3>
                <p className="text-literary-dark/70 mb-4">Подарено более 10,000 книг участникам</p>
                <Badge className="bg-literary-brown text-white">10,000+ книг</Badge>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button size="lg" className="bg-literary-brown hover:bg-literary-dark text-white px-8 py-4">
              <Icon name="Image" size={20} className="mr-2" />
              Посмотреть все фото
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 bg-literary-dark text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <Icon name="Mail" size={48} className="text-literary-cream mx-auto mb-6" />
          <h2 className="text-4xl font-bold mb-6">Присоединяйтесь к нам!</h2>
          <p className="text-xl text-literary-cream/80 mb-8 max-w-2xl mx-auto">
            Хотите принять участие в следующем квизе или узнать больше о наших мероприятиях?
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-literary-brown hover:bg-literary-cream hover:text-literary-dark px-8 py-4">
              <Icon name="Send" size={20} className="mr-2" />
              Связаться с нами
            </Button>
            <Button variant="outline" size="lg" className="border-literary-cream text-literary-cream hover:bg-literary-cream hover:text-literary-dark px-8 py-4">
              <Icon name="Phone" size={20} className="mr-2" />
              Задать вопрос
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-literary-dark border-t border-literary-brown/30">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-3">
              <Icon name="BookOpen" size={24} className="text-literary-brown" />
              <span className="text-literary-cream font-semibold text-lg">Живая Классика</span>
            </div>
            
            <div className="flex items-center space-x-6">
              <span className="text-literary-cream/70">© 2024 Фонд "Живая Классика"</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}