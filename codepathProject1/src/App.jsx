import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './components/Navbar'
import Introduction from './components/Introduction'
import Listings from './components/Listings'


function App() {

  return (
    <div className="App">
      <Navbar />
      <Introduction />
      <Listings 
        image="./src/assets/hotelListing1.png" 
        title="Radisson Blu Downtown Toronto" 
        description="At the Radisson Blu Toronto Downtown, you are as close as you can get to the hottest spots in Canadas largest city. Our hotel provides a stylish launchpad for your stay in the Ontario capital, whether you want to walk to Toronto Harbour, stretch out on a pool chaise with the CN Tower for a backdrop, or shop at boutiques in the Distillery District." 
        rating="8.2" 
        link="https://www.booking.com/hotel/ca/radisson-admiral-toronto-harbourfront.html?aid=309654&label=hotels-english-en-caus-Uka*YKnbpTpo8Hs00QDW4AS166194690220%3Apl%3Ata%3Ap1%3Ap22%2C563%2C000%3Aac%3Aap%3Aneg%3Afi%3Atikwd-12196901%3Alp9004370%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9YcsZ-Id2vkzIfTmYhvC5HOg&sid=f808cea774dfe7a4357773faaba65e0b&dest_id=-574890&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=1&hpos=1&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1677369012&srpvid=1f74a799ceb50141&type=total&ucfs=1&activeTab=main"
      />
      <Listings 
        image="./src/assets/hotelListing2.png" 
        title="Fairmont Royal York Hotel" 
        description="Toronto's landmark hotel is the gateway to your essential Toronto experience. Located in the downtown core, Fairmont Royal York is minutes from the city's biggest events and attractions. Enjoy a new era of dining with 3 unique dining venues taking center stage at Fairmont Royal York, REIGN Restaurant + Bar + Bakery, and Toronto's Martini Den, Library Bar." 
        rating="8.3" 
        link="https://www.booking.com/hotel/ca/fairmont-royal-york.html?aid=309654&label=hotels-english-en-caus-Uka*YKnbpTpo8Hs00QDW4AS166194690220%3Apl%3Ata%3Ap1%3Ap22%2C563%2C000%3Aac%3Aap%3Aneg%3Afi%3Atikwd-12196901%3Alp9004370%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9YcsZ-Id2vkzIfTmYhvC5HOg&sid=f808cea774dfe7a4357773faaba65e0b&dest_id=-574890&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=3&hpos=3&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1677551073&srpvid=c96010f0040c027c&type=total&ucfs=1&activeTab=main"
      />
      <Listings 
        image="./src/assets/hotelListing3.png" 
        title="GLOBALSTAY" 
        description="GLOBALSTAY Gorgeous Downtown Apartment provides accommodations with seating area. Popular points of interest near the apartment include CN Tower, Scotiabank Arena and Toronto Symphony Orchestra. The nearest airport is Billy Bishop Toronto City Airport, 1.2 miles from GLOBALSTAY Gorgeous Downtown Apartment." 
        rating="7.8" 
        link="https://www.booking.com/hotel/ca/apartments-kingdom-gorgeous-downtown-apartment.html?aid=318615&label=New_English_EN_CAUS_19114759705-jt_6k_%2AZ9jMEdOTMffDu9AS634117823706%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atiaud-297601666475%3Adsa-140566016665%3Alp9004167%3Ali%3Adec%3Adm%3Aag19114759705%3Acmp108539785&sid=f808cea774dfe7a4357773faaba65e0b&dest_id=-574890;dest_type=city;dist=0;group_adults=2;group_children=0;hapos=2;hpos=2;no_rooms=1;req_adults=2;req_children=0;room1=A%2CA;sb_price_type=total;sr_order=popularity;srepoch=1677551459;srpvid=1aec11b1337b0019;type=total;ucfs=1&#hotelTmpl"
      />

      <Listings 
        image="./src/assets/hotelListing4.png" 
        title="InterContinental Toronto Centre" 
        description="Just 350 feet from the Metro Toronto Convention Center, steps from the CN Tower, this hotel in downtown Toronto offers relaxing spa services, an indoor pool and an on-site restaurant. The Harbourfront Center is within 2,150 feet. Popular points of interest near the apartment include CN Tower, Scotiabank Arena and Toronto Symphony Orchestra." 
        rating="8.4" 
        link="https://www.booking.com/hotel/ca/inter-continental-toronto-centre.html?aid=309654&label=hotels-english-en-caus-Uka*YKnbpTpo8Hs00QDW4AS166194690220%3Apl%3Ata%3Ap1%3Ap22%2C563%2C000%3Aac%3Aap%3Aneg%3Afi%3Atikwd-12196901%3Alp9004370%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9YcsZ-Id2vkzIfTmYhvC5HOg&sid=f808cea774dfe7a4357773faaba65e0b&dest_id=-574890&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=4&hpos=4&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1677369012&srpvid=1f74a799ceb50141&type=total&ucfs=1&activeTab=main"
      />

      <Listings 
        image="./src/assets/hotelListing5.png" 
        title="Chelsea Hotel Toronto" 
        description="Stay in the heart of Toronto. Within 1,000 feet of College Subway Station, this hotel features on-site dining, a fitness center and 2 indoor pools. The Toronto Eaton Center is 1,950 feet away. At the Chelsea Hotel Toronto guests can relax in the sauna or hot tub. There is also a games room and gift shop.Chelsea Hotel Toronto is 10 minutes' walk from the Art Gallery of Ontario." 
        rating="7.0" 
        link="https://www.booking.com/hotel/ca/eaton-chelsea.html?aid=309654&label=hotels-english-en-caus-Uka*YKnbpTpo8Hs00QDW4AS166194690220%3Apl%3Ata%3Ap1%3Ap22%2C563%2C000%3Aac%3Aap%3Aneg%3Afi%3Atikwd-12196901%3Alp9004370%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9YcsZ-Id2vkzIfTmYhvC5HOg&sid=f808cea774dfe7a4357773faaba65e0b&dest_id=-574890&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=9&hpos=9&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1677551311&srpvid=ff151167936401c2&type=total&ucfs=1&activeTab=main"
      />

      <Listings 
        image="./src/assets/hotelListing6.png" 
        title="Town Inn Suites" 
        description="This downtown Toronto hotel, located within a 5-minute walk of the Bloor-Yonge Subway Station. These spacious suites offer a fully equipped kitchen. The Furnished Suites have a 24-hour front desk. Town Inn Suites is 1.9 mi from Eaton Center, which features shopping and dining. The University of Toronto is within a 12-minute walk of the hotel." 
        rating="7.7" 
        link="https://www.booking.com/hotel/ca/town-inn-suites.html?aid=309654&label=hotels-english-en-caus-Uka%2AYKnbpTpo8Hs00QDW4AS166194690220%3Apl%3Ata%3Ap1%3Ap22%2C563%2C000%3Aac%3Aap%3Aneg%3Afi%3Atikwd-12196901%3Alp9004370%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9YcsZ-Id2vkzIfTmYhvC5HOg&sid=f808cea774dfe7a4357773faaba65e0b&dest_id=-574890;dest_type=city;dist=0;group_adults=2;group_children=0;hapos=12;hpos=12;no_rooms=1;req_adults=2;req_children=0;room1=A%2CA;sb_price_type=total;sr_order=popularity;srepoch=1677551311;srpvid=ff151167936401c2;type=total;ucfs=1&#hotelTmpl"
      />

      <Listings 
        image="./src/assets/hotelListing7.png" 
        title="The Yorkville Royal Sonesta Hotel Toronto" 
        description="Surrounded by art galleries, fine restaurants and stylish boutiques in Toronto's Yorkville district, this hotel offers enjoyable facilities and unique dining options, including a seasonal patio lounge. The hotel is located across the street from the Royal Ontario Museum, a 2 minutes' walk from the University of Toronto." 
        rating="8.6" 
        link="https://www.booking.com/hotel/ca/royal-sonesta-toronto-yorkville.html?aid=309654&label=hotels-english-en-caus-Uka*YKnbpTpo8Hs00QDW4AS166194690220%3Apl%3Ata%3Ap1%3Ap22%2C563%2C000%3Aac%3Aap%3Aneg%3Afi%3Atikwd-12196901%3Alp9004370%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9YcsZ-Id2vkzIfTmYhvC5HOg&sid=f808cea774dfe7a4357773faaba65e0b&dest_id=-574890&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=14&hpos=14&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1677551311&srpvid=ff151167936401c2&type=total&ucfs=1&activeTab=mainh"
      />

      <Listings 
        image="./src/assets/hotelListing8.png" 
        title="Delta Hotels by Marriott Toronto Airport & Conference Centre" 
        description="Located opposite the Toronto Congress Center, this hotel features a Starbucks in the lobby and free WiFi throughout the property. Guests can enjoy free transfers to Pearson International Airport located 4.3 mi away. Guests can take advantage of a variety of on-site restaurants, including Harry’s Bar featuring a casual food and drink menu." 
        rating="7.8" 
        link="https://www.booking.com/hotel/ca/international-plaza-hotel.html?aid=309654&label=hotels-english-en-caus-Uka*YKnbpTpo8Hs00QDW4AS166194690220%3Apl%3Ata%3Ap1%3Ap22%2C563%2C000%3Aac%3Aap%3Aneg%3Afi%3Atikwd-12196901%3Alp9004370%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9YcsZ-Id2vkzIfTmYhvC5HOg&sid=f808cea774dfe7a4357773faaba65e0b&dest_id=-574890&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=15&hpos=15&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1677551311&srpvid=ff151167936401c2&type=total&ucfs=1&activeTab=main"
      />

      <Listings 
        image="./src/assets/hotelListing9.png" 
        title="Stay Inn Hotel Toronto" 
        description="This Etobicoke hotel is within a 15-minute drive of Pearson International Airport. The hotel offers free Wi-Fi, free on-site parking. Downtown Toronto is within a 20 minutes' drive, while Canada's Wonderland theme park is a 25 minutes' drive of the Stay Inn near Pearson International Airport. The Sherway Gardens Shopping Center is about 1.2 mi away." 
        rating="8.6" 
        link="https://www.booking.com/hotel/ca/apartments-kingdom-gorgeous-downtown-apartment.html?aid=318615&label=New_English_EN_CAUS_19114759705-jt_6k_%2AZ9jMEdOTMffDu9AS634117823706%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atiaud-297601666475%3Adsa-140566016665%3Alp9004167%3Ali%3Adec%3Adm%3Aag19114759705%3Acmp108539785&sid=f808cea774dfe7a4357773faaba65e0b&dest_id=-574890;dest_type=city;dist=0;group_adults=2;group_children=0;hapos=2;hpos=2;no_rooms=1;req_adults=2;req_children=0;room1=A%2CA;sb_price_type=total;sr_order=popularity;srepoch=1677551459;srpvid=1aec11b1337b0019;type=total;ucfs=1&#hotelTmpl"
      />

      <Listings 
        image="./src/assets/hotelListing10.png" 
        title="Holiday Inn Toronto International Airport" 
        description="Offering a 24-hour airport shuttle, the Holiday Inn Toronto International Airport is just 3 minutes' drive from Toronto Pearson International Airport. The hotel's on-site restaurant, Bistro YYZ is open for breakfast lunch and dinner. The on-site coffee shop, Seattle's Best is open at 05:00 each day for early morning departures."
        rating="7.2" 
        link="https://www.booking.com/hotel/ca/holiday-inn-select-toronto-international-airport.html?aid=309654&label=hotels-english-en-caus-Uka%2AYKnbpTpo8Hs00QDW4AS166194690220%3Apl%3Ata%3Ap1%3Ap22%2C563%2C000%3Aac%3Aap%3Aneg%3Afi%3Atikwd-12196901%3Alp9004370%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9YcsZ-Id2vkzIfTmYhvC5HOg&sid=f808cea774dfe7a4357773faaba65e0b&dest_id=-574890;dest_type=city;dist=0;group_adults=2;group_children=0;hapos=22;hpos=22;no_rooms=1;req_adults=2;req_children=0;room1=A%2CA;sb_price_type=total;sr_order=popularity;srepoch=1677551311;srpvid=ff151167936401c2;type=total;ucfs=1&#hotelTmpl"
      />

      <Listings 
        image="./src/assets/hotelListing11.png" 
        title="The Broadview Hotel" 
        description="Located in Toronto, 1.5 mi from Ryerson University, The Broadview Hotel has a bar and rooms with free WiFi access. Guests have access to the on-site business center and can check the newspapers. The reception can provide advice on the area in order to help guests plan their day. Four Seasons Center for the Performing Arts is 1.9 mi from the property. " 
        rating="8.4" 
        link="https://www.booking.com/hotel/ca/the-broadview.html?aid=309654&label=hotels-english-en-caus-Uka%2AYKnbpTpo8Hs00QDW4AS166194690220%3Apl%3Ata%3Ap1%3Ap22%2C563%2C000%3Aac%3Aap%3Aneg%3Afi%3Atikwd-12196901%3Alp9004370%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9YcsZ-Id2vkzIfTmYhvC5HOg&sid=f808cea774dfe7a4357773faaba65e0b&dest_id=-574890;dest_type=city;dist=0;group_adults=2;group_children=0;hapos=23;hpos=23;no_rooms=1;req_adults=2;req_children=0;room1=A%2CA;sb_price_type=total;sr_order=popularity;srepoch=1677551311;srpvid=ff151167936401c2;type=total;ucfs=1&#hotelTmpl"
      />
    </div>
  )
}

export default App
