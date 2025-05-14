const scaleDegrees = {
    
    'A': {
        '1': 'A',
        'b2': 'Bb',
        '2': 'B',
        'b3': 'C',
        '3': 'C#',
        '4': 'D',
        'b5': 'Eb',
        '5': 'E',
        'b6': 'F',
        '6': 'F#',
        'b7': 'G',
        '7': 'G#'
    },
    'B': {
        '1': 'B',
        'b2': 'C',
        '2': 'C#',
        'b3': 'D',
        '3': 'D#',
        '4': 'E',
        'b5': 'F',
        '5': 'F#',
        'b6': 'G',
        '6': 'G#',
        'b7': 'A',
        '7': 'A#',
    },
    'C': {
        '1': 'C',
        'b2': 'Db',
        '2': 'D',
        'b3': 'Eb',
        '3': 'E',
        '4': 'F',
        'b5': 'Gb',
        '5': 'G',
        'b6': 'Ab',
        '6': 'A',
        'b7': 'Bb',
        '7': 'B',
    }    ,
    'D': {
        '1': 'D',
        'b2': 'Eb',
        '2': 'E',
        'b3': 'F',
        '3': 'F#',
        '4': 'G',
        'b5': 'Ab',
        '5': 'A',
        'b6': 'Bb',
        '6': 'B',
        'b7': 'C',
        '7': 'C#',
    },'E': {
        '1': 'E',
        'b2': 'F',
        '2': 'F#',
        'b3': 'G',
        '3': 'G#',
        '4': 'A',
        'b5': 'Bb',
        '5': 'B',
        'b6': 'C',
        '6': 'C#',
        'b7': 'D',
        '7': 'D#',
    },
    'F': {
        '1': 'F',
        'b2': 'Gb',
        '2': 'G',
        'b3': 'Ab',
        '3': 'A',
        '4': 'Bb',
        'b5': 'Cb',
        '5': 'C',
        'b6': 'Db',
        '6': 'D',
        'b7': 'Eb',
        '7': 'E',
    },
    'G': {
        '1': 'G',
        'b2': 'Ab',
        '2': 'A',
        'b3': 'Bb',
        '3': 'B',
        '4': 'C',
        'b5': 'Db',
        '5': 'D',
        'b6': 'Eb',
        '6': 'E',
        'b7': 'F',
        '7': 'F#',
    },
    'Bb': {
        '1': 'Bb',
        'b2': 'Cb',
        '2': 'C',
        'b3': 'Db',
        '3': 'D',
        '4': 'Eb',
        'b5': 'Fb',
        '5': 'F',
        'b6': 'Gb',
        '6': 'G',
        'b7': 'Ab',
        '7': 'A'
    },
    'C#': {
        '1': 'C#',
        'b2': 'D',
        '2': 'D#',
        'b3': 'E',
        '3': 'E#',
        '4': 'F#',
        'b5': 'G',
        '5': 'G#',
        'b6': 'A',
        '6': 'A#',
        'b7': 'B',
        '7': 'B#'
    },
    'D#': {
        '1': 'D#',
        'b2': 'E',
        '2': 'E#',
        'b3': 'F#',
        '3': 'F##',
        '4': 'G#',
        'b5': 'A',
        '5': 'A#',
        'b6': 'B',
        '6': 'B#',
        'b7': 'C#',
        '7': 'C##'
    },
    'F#': {
        '1': 'F#',
        'b2': 'G',
        '2': 'G#',
        'b3': 'A',
        '3': 'A#',
        '4': 'B',
        'b5': 'C',
        '5': 'C#',
        'b6': 'D',
        '6': 'D#',
        'b7': 'E',
        '7': 'F'
    },
    'G#': {
        '1': 'G#',
        'b2': 'A',
        '2': 'A#',
        'b3': 'B',
        '3': 'C',
        '4': 'C#',
        'b5': 'D',
        '5': 'D#',
        'b6': 'E',
        '6': 'F',
        'b7': 'F#',
        '7': 'G'
    },
    'Db': {
        '1': 'Db',
        'b2': 'Ebb',
        '2': 'Eb',
        'b3': 'Fb',
        '3': 'F',
        '4': 'Gb',
        'b5': 'Abb',
        '5': 'Ab',
        'b6': 'Bbb',
        '6': 'Bb',
        'b7': 'Cb',
        '7': 'C'
    },
    'A#': {
    '1': 'A#',
    'b2': 'B',
    '2': 'B#',
    'b3': 'C#',
    '3': 'C##',
    '4': 'D#',
    'b5': 'E',
    '5': 'E#',
    'b6': 'F#',
    '6': 'F##',
    'b7': 'G#',
    '7': 'G##'
},

'Eb': {
    '1': 'Eb',
    'b2': 'Fb',
    '2': 'F',
    'b3': 'Gb',
    '3': 'G',
    '4': 'Ab',
    'b5': 'Bbb',
    '5': 'Bb',
    'b6': 'Cb',
    '6': 'C',
    'b7': 'Db',
    '7': 'D'
},

'Gb': {
    '1': 'Gb',
    'b2': 'Abb',
    '2': 'Ab',
    'b3': 'Bbb',
    '3': 'Bb',
    '4': 'Cb',
    'b5': 'Dbb',
    '5': 'Db',
    'b6': 'Ebb',
    '6': 'Eb',
    'b7': 'Fb',
    '7': 'F'
},

'Ab': {
    '1': 'Ab',
    'b2': 'Bbb',
    '2': 'Bb',
    'b3': 'Cb',
    '3': 'C',
    '4': 'Db',
    'b5': 'Ebb',
    '5': 'Eb',
    'b6': 'Fb',
    '6': 'F',
    'b7': 'Gb',
    '7': 'G'
},

    
};
    
    


const scales = Object.keys(scaleDegrees);
const degrees = ['1', 'b2', '2', 'b3', '3', '4', 'b5', '5', 'b6', '6', 'b7', '7'];

document.getElementById('get-random').addEventListener('click', function () {
    const randomScale = scales[Math.floor(Math.random() * scales.length)];
    const randomDegree = degrees[Math.floor(Math.random() * degrees.length)];

    document.getElementById('scale').value = randomScale;
    document.getElementById('degree').value = randomDegree;
    document.getElementById('show').value = ''; 
});

document.getElementById('see-answer').addEventListener('click', function () {
    const scale = document.getElementById('scale').value;
    const degree = document.getElementById('degree').value;

    if (scaleDegrees[scale] && scaleDegrees[scale][degree]) {
        document.getElementById('show').value = scaleDegrees[scale][degree];
    } else {
        document.getElementById('show').value = 'Invalid scale or degree.';
    }
});