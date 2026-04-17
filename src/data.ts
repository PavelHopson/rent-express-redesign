export type CarCategory = 'economy' | 'comfort' | 'business' | 'premium' | 'suv';

export interface Car {
  id: string;
  model: string;
  brand: string;
  category: CarCategory;
  pricePerDay: number;
  priceOld?: number;
  transmission: 'AT' | 'MT';
  fuel: 'Бензин' | 'Дизель' | 'Гибрид';
  year: number;
  features: string[];
  available: boolean;
}

export const cars: Car[] = [
  { id: 'solaris', brand: 'Hyundai', model: 'Solaris', category: 'economy', pricePerDay: 1700, priceOld: 2200, transmission: 'AT', fuel: 'Бензин', year: 2022, features: ['Кондиционер', 'USB', 'ABS'], available: true },
  { id: 'logan', brand: 'Renault', model: 'Logan', category: 'economy', pricePerDay: 1800, transmission: 'AT', fuel: 'Бензин', year: 2021, features: ['Кондиционер', 'Bluetooth'], available: true },
  { id: 'rio', brand: 'Kia', model: 'Rio', category: 'economy', pricePerDay: 1900, transmission: 'AT', fuel: 'Бензин', year: 2022, features: ['Климат', 'USB', 'ABS'], available: true },
  { id: 'polo', brand: 'Volkswagen', model: 'Polo', category: 'comfort', pricePerDay: 2400, priceOld: 2900, transmission: 'AT', fuel: 'Бензин', year: 2023, features: ['Климат-контроль', 'Круиз', 'Подогрев'], available: true },
  { id: 'rapid', brand: 'Skoda', model: 'Rapid', category: 'comfort', pricePerDay: 2600, transmission: 'AT', fuel: 'Бензин', year: 2022, features: ['Климат', 'Круиз', 'Подогрев'], available: true },
  { id: 'corolla', brand: 'Toyota', model: 'Corolla', category: 'comfort', pricePerDay: 3200, transmission: 'AT', fuel: 'Бензин', year: 2023, features: ['Климат', 'Круиз', 'Камера'], available: true },
  { id: 'camry', brand: 'Toyota', model: 'Camry', category: 'business', pricePerDay: 5700, priceOld: 6500, transmission: 'AT', fuel: 'Бензин', year: 2023, features: ['Кожа', 'Круиз', 'Камера 360°'], available: true },
  { id: 'eclass', brand: 'Mercedes-Benz', model: 'E-Class', category: 'business', pricePerDay: 8900, transmission: 'AT', fuel: 'Бензин', year: 2023, features: ['Кожа', 'Массаж', 'Burmester'], available: true },
  { id: 'superb', brand: 'Skoda', model: 'Superb', category: 'business', pricePerDay: 4800, transmission: 'AT', fuel: 'Бензин', year: 2022, features: ['Кожа', 'Климат 3-зон'], available: true },
  { id: 'x5', brand: 'BMW', model: 'X5', category: 'premium', pricePerDay: 12500, transmission: 'AT', fuel: 'Бензин', year: 2023, features: ['AWD', 'Кожа', 'Панорама'], available: true },
  { id: 'sclass', brand: 'Mercedes-Benz', model: 'S-Class', category: 'premium', pricePerDay: 21700, transmission: 'AT', fuel: 'Бензин', year: 2024, features: ['VIP-пакет', 'Шофёр опция'], available: true },
  { id: 'qashqai', brand: 'Nissan', model: 'Qashqai', category: 'suv', pricePerDay: 3800, transmission: 'AT', fuel: 'Бензин', year: 2022, features: ['AWD', 'Климат', 'Круиз'], available: true },
  { id: 'rav4', brand: 'Toyota', model: 'RAV4', category: 'suv', pricePerDay: 4500, transmission: 'AT', fuel: 'Гибрид', year: 2023, features: ['AWD', 'Камера 360°', 'LED'], available: true },
];

export const categories: { id: CarCategory; label: string; description: string; from: number }[] = [
  { id: 'economy', label: 'Эконом', description: 'Для ежедневных поездок', from: 1700 },
  { id: 'comfort', label: 'Комфорт', description: 'Тишина и простор', from: 2400 },
  { id: 'business', label: 'Бизнес', description: 'Статус и уровень', from: 4800 },
  { id: 'premium', label: 'Премиум', description: 'Флагманские модели', from: 12500 },
  { id: 'suv', label: 'Внедорожники', description: 'Для любых дорог', from: 3800 },
];

export const usps = [
  {
    number: '01',
    title: 'Без залога',
    description: 'Оформляем по паспорту и правам. Никаких дорогих залогов и замороженных денег.',
  },
  {
    number: '02',
    title: 'Безлимит пробега',
    description: 'Езжайте сколько нужно. Без доплат за километры, без скрытых счётчиков.',
  },
  {
    number: '03',
    title: 'Доставка 24/7',
    description: 'Привезём в аэропорт Храброво, отель, к дому. В любое время суток — бесплатно.',
  },
  {
    number: '04',
    title: 'Замена за 1 час',
    description: 'Форс-мажор? Техподдержка 24/7 подменит авто в течение часа в любой точке области.',
  },
  {
    number: '05',
    title: 'Бесплатные бонусы',
    description: 'Детские кресла, бустеры, зарядки, карта региона — включены в стоимость аренды.',
  },
  {
    number: '06',
    title: 'Оформление 10 мин',
    description: 'От приезда до ключей — десять минут. Бюрократии нет. Подписал — поехал.',
  },
];

export const process = [
  { step: '01', title: 'Выберите авто', description: 'Листайте каталог, сравнивайте модели. Можно прямо с телефона.' },
  { step: '02', title: 'Укажите даты', description: 'Когда забрать, куда доставить, на сколько дней. Мы посчитаем стоимость.' },
  { step: '03', title: 'Подтвердите бронь', description: 'Заполните короткую форму. Звонок от менеджера в течение 10 минут.' },
  { step: '04', title: 'Получите машину', description: 'Доставим в удобное место и время. Или заберите в офисе.' },
];

export const testimonials = [
  { name: 'Алексей В.', role: 'Турист из Москвы', rating: 5, text: 'Прилетел в Храброво — авто уже ждало. Всё оформили за 7 минут. Логан свежий, без косяков. Взял на 4 дня, откатал всю область. Вернул — возврат залога не нужен (его не брали). Ребята, вы топ.' },
  { name: 'Мария К.', role: 'Бизнес-поездка', rating: 5, text: 'Брала Camry на неделю. Машина чистая, заправленная, техподдержка на связи. Приятно, что доставили к отелю в 5 утра. Цена адекватная, без скрытых платежей.' },
  { name: 'Дмитрий С.', role: 'Местный житель', rating: 5, text: 'Свой авто в ремонте — арендовал на месяц. Дали хорошую скидку за долгий срок. Страховка включена, бензина достаточно. Ни одной претензии. Буду рекомендовать.' },
  { name: 'Ольга Т.', role: 'Свадьба', rating: 5, text: 'S-Class на свадьбу. Привезли на украшение — машина безупречна. Водитель профессионал. Все гости под впечатлением. Спасибо за сервис.' },
  { name: 'Игорь П.', role: 'Корпоратив', rating: 5, text: 'Арендовали 4 машины на корпоратив для топ-менеджмента. Чёткая логистика, единый менеджер, скидка за объём. Теперь арендуем только у них.' },
];

export const faq = [
  { q: 'Какие документы нужны для аренды?', a: 'Только паспорт и водительские права. Стаж — от 2 лет. Возраст — от 21 года. Всё. Никаких дополнительных бумаг.' },
  { q: 'Берёте ли залог?', a: 'Нет. Мы принципиально не берём залог. В тарифе учтена страховка и риски — остальное на нашей стороне.' },
  { q: 'Что если сломается в поездке?', a: 'Круглосуточная техподдержка по номеру на договоре. Мы заменим автомобиль в течение часа в любой точке Калининградской области. Бесплатно.' },
  { q: 'Можно ли выехать в другой регион?', a: 'По Калининградской области — без ограничений. Выезд за пределы региона требует согласования — звоните менеджеру.' },
  { q: 'Что с пробегом?', a: 'Безлимит. Едете сколько нужно. Никаких доплат за километры, никаких счётчиков.' },
  { q: 'Как оплатить?', a: 'Наличные, карта, перевод на счёт для юрлиц. Оплата в день получения авто.' },
  { q: 'Можно ли продлить?', a: 'Да, в один звонок. Если машина не забронирована другим клиентом — продляем без визита в офис.' },
  { q: 'Есть ли доставка в аэропорт?', a: 'Да. Бесплатная доставка в Храброво 24/7. Просто укажите рейс — встретим у выхода.' },
];

export const stats = [
  { value: '42+', label: 'авто в парке' },
  { value: '4.9', label: 'рейтинг клиентов' },
  { value: '24/7', label: 'работаем без выходных' },
  { value: '10 мин', label: 'среднее оформление' },
  { value: '3 года', label: 'на рынке Калининграда' },
  { value: '1 700₽', label: 'от / сутки' },
];

export const locations = [
  { name: 'Офис на Киевской', address: 'ул. Киевская, 19б, Калининград', hours: 'Пн–Вс · 08:00–22:00', phone: '+7 (4012) 40-39-39' },
  { name: 'Офис на А. Невского', address: 'ул. А. Невского, 54-54б, Калининград', hours: 'Пн–Вс · 08:00–22:00', phone: '+7 (902) 414-04-72' },
  { name: 'Аэропорт Храброво', address: 'Доставка 24/7 к любому рейсу', hours: 'Круглосуточно', phone: '+7 (4012) 40-39-39' },
];

export const contact = {
  phone: '+7 (4012) 40-39-39',
  phoneSecondary: '+7 (902) 414-04-72',
  whatsapp: 'https://wa.me/79024140472',
  telegram: 'https://t.me/rentkld',
  email: 'info@rent-kld.ru',
  brand: 'RENT-express',
  tagline: 'Прокат авто в Калининграде',
};
