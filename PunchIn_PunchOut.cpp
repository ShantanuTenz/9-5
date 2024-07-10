#include <iostream>
#include <unordered_map>
using namespace std;

int main() {
    string str;
    cin>>str;

    string hour = "";
    string minutes = "";

    hour.push_back(str[0]);
    hour.push_back(str[1]);

    minutes.push_back(str[3]);
    minutes.push_back(str[4]);

    int hr = stoi(hour);
    int min = stoi(minutes);

    hr += 8;
    min += 30;

    if(min == 60){
        hr++;
        min = 0;
    }

    else if(min > 60){
        int left = min-60;
        hr++;
        min = left;
    }

    hour = to_string(hr);
    minutes = to_string(min);

    unordered_map<string, string> m;
    m["0"] = "00";
    m["1"] = "01";
    m["2"] = "02"; 
    m["3"] = "03";
    m["4"] = "04";
    m["5"] = "05";
    m["6"] = "06";
    m["7"] = "07";
    m["8"] = "08";
    m["9"] = "09";
    m["10"] = "10";
    m["11"] = "11";
    m["12"] = "12";
    m["13"] = "01";
    m["14"] = "02";
    m["15"] = "03";
    m["16"] = "04";
    m["17"] = "05";
    m["18"] = "06";
    m["19"] = "07";
    m["20"] = "08";
    m["21"] = "09";
    m["22"] = "10";
    m["23"] = "11";
    m["24"] = "12";

    cout<<m[hour]<<":"<<minutes;
    return 0;
}
