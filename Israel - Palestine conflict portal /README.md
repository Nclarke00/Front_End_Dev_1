# Brewery/beer page

The purpose of this project is to educate the public about the ongoing conflict between Israel 
and Palestine. My webpage does not persuade the user to take the side of either party. Additionally 
the page will only contain facts, statistics, and educational resources about the conflict, but will 
not contain opinioins of myself or any other individual or group. 

This toic is important to me because I have viewed some of the narritive about the issue to be 
harmful and heavily partisan. I have observed individuals giving opionians on the topic with 
little real knowledge of the subject and I see govenments and elected officails posing a wildly
one-sided view of the issue in an effort to push a greatly politicised agenda. in the midst 
of propoganda and uneducated yet stong opinions I find it important to educate individuals about 
the highly complex and nonbinary issue that is the conflict taking place in Israel. 

For this Project, I intend to use the API's of both 'israelpalestinetimeline.org' 
and the United nations human rights office to access their databases. I then 
intend to use javascript to create multiple visualizations to represent the data.
Lastly, I want to provide access to one crashcourse and one TedTalk that summarizes
the history of the conflict. There is also data on wikipedia about the conflict 
that spans earlier than the year 2000 that I beleive would be helpful. 
To make the page responsive, I will add this <meta> tag to my web pages
<meta name="viewport" content="width=device-width, initial-scale=1.0">

# WIP Checkin

So far, while working on this project. I have created the basic html structure as a portal. When I 
continue, I will usew the API of the desired website for data use. One thing to keep in mind is
that the website that I origionally intended to use has a non-public API. Therefore, I will be 
looking for a new website for my data. One possible location for this is Wikipedia. they display 
a table of data that I may be able to use. Another possible location is the UN website where 
they do have data regarding the conflict in Israel. After this is done, I will be using javascript 
to add visualizations to the page and add links to educational videos.

# Update 

After trying and failing to get access to meaningful data about the conflict in israel, I decided to pivot my assignment to something
with more accessible data and a lot more light-hearted. I decided to make a web page that displays an extensive list of breweries depending
on the state you live in. In additon, you will be able to filter for beers that you are interested in trying. 

# Process

I started by finding an API (Open Brewery DB) containing a database full of breweries by state. 
Using fetch API I was able to use it in a dropdown menu which could be selected by users. There are 
two main features of the webpage: Getting breweries by State and filtering Beers by type. When 
finding a list of breweries, users will click the Get Breweries buttonwhich triggers and event 
listener. the event listener retreives the selected state (from a hardcoded list) and makes a 
request to the "Open Brewery 
DB" APIin order to get data of those breweries. It then displays the list on the page. 
When filtering beers by type, you can select a type of beer from a dropdown. The filter beers 
button triggers another event listener which retreives the beer selected. It then fetches data from 
a seperate JSON file containing 50 different beers. The beers are then displayed with their type, 
and rating.


# Reflection

I decided to pivot my project in the last week or 2 for a number of reasons. The first being 
that I could not find an extensive and accurate database on the conflict in israel that I
could use in my project. The second and probably more important reason is that the subject
is just very touchy and I thougt the brewery project would be a little more fun, light-hearted
and overall more appropriate for the assignment. I would've liked to add more content to the 
project such as an alphebetical filter in order to limit the amount of breweries displayed
on the page. It also would have been nice to have more filters/questions to allow a more 
personalized search for beer. Lastly, I should have made the page more asthetically pleasing 
by adding a background with maybe a picture of beer. Making the first filter was somewhat 
challenging. I found a similar example in stack overflow, but had to modify it quite a bit in
oder to make it run in my code. After I wrote the code for the first filter, the second one was 
a bit easier. Something I would change if I did it again was the list of states and beer types.
As it is, I hard-coded the lists in the html file which makes it look sloppy and takes up too 
much space. I think instead I should have put them into a seperate file and had the javascript 
pull the data out of the file and display it on the page. It also took me a while to get the 
"no beers found" warning to display. I had to ask a friend how to get that specific part of the 
code to work, but the solution seemed pretty straight forward after we discussed the logic. 
I likied getting a little more expereince getting data out of a JSON file and I feel more confident about it. 
