// const DeezerApi = require('./deezer-api.js');


class AlbumReport {

    constructor(albumID) {
        this.albumID = albumID;
    }

    getStats(albumData) {
        const allDuration = albumData.map((sum) => {
            return sum.duration;
        });
        console.log(allDuration);

        let albumAverages = allDuration
            .map(final => final / allDuration.length)
            .reduce((total, duration) => {
                return total + duration;
            }, 0);
        console.log(albumAverages);

    }
}
module.exports = AlbumReport;
/*
class ArtistReport {

    constructor(artistId) {
        this.api = new DeezerApi();
        this.artistId = artistId;
    }

    artistReportFunc() {
        return new Promise(function (resolve, reject) {

            this.api.fetchArtistInfoAlbums(this.artistId)
                .then((dataMus) => {
                    const arryAlbumId = dataMus.map((arrId) => {
                        return arrId.id;
                    });
                    console.log(arryAlbumId);

                    const getsCallArray = arryAlbumId.map((albumID) => {
                        const fetchPromise = this.api.fetchAlbumTracksById(albumID);
                        new fetchPromise;
                    });

                    const allFetchPromise = Promise.all(getsCallArray);

                    allFetchPromise
                        .then((albumResultsArray) => {
                            // const albumInfoDuration = getsCallArray.map((albParam) => {
                            //     return `${albParam.duration} ${albParam.title}`;
                            // });
                            // console.log(arguments);
                            console.log(albumResultsArray);
                        });
                })


                .catch(function (error) {
                    console.error("api Error", error);
                    // reject(error);
                });
            //     })
            //

        })
    }
}
module.exports = {AlbumReport, ArtistReport};


/*
getStats2()
{
    return new Promise(function (resolve, reject) {
        //שרשרת של פרומיסים  פרומיס.all
        //if we get all the data from deezer..... (artist data -> album id)

        const promise1 = this.api.fetchAlbumsForArtistById(111);
        const promise2 = this.api.fetchAlbumsForArtistById(222);
        Promise.all([promise1, promise2
            //הסדר של הקריאות במערך זה הסדר של התוצאות כלומר אם
            //   גם לפרומיס אוול ישcatch h
        ]).then(function (arrayResult) {
        // לעשות חיבושים ולהחזיר את התוצאה בדיוק כמו שכתוב במשימה.
        }).catch(function (error) {
            console.error("api Error", error);
            // res.send(error.message);     reject(error)
        });


    .
        then(function (responseAlbum) {
            //forEach album in albumId create http request

            // create an array  of albums id as object with
            // array of all the duration of every track.

            [
                {'album id', [12, 25, 85]
        },
            {
                'album name', [12, 25, 85]
            }
        ,
            {
                'album name', [12, 25, 85]
            }
        ,
            {
                'album name', [12, 25, 85]
            }
        ,
            {
                'album name', [12, 25, 85]
            }

        ]
            ;
        })
        //
            .catch(function (error) {
                console.error("api Error", error);
                // res.send(error.message);     reject(error)
            });
    });

    // מקבל ID של אומן ומוציא ממנו את ה ID של כל אלבום.
    //    בכל אלבום יש מערך של כל השירים ויש משך שיר בתוך כל אובייקט שיר.
    //    אני צריכה ליצור מערך של כל הID של האלבומים ובתוך את אובייקט אלבום ישנו מערך של המשך שך כל השירים.

}

}
*/

