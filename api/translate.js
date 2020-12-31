module.exports = (req, res) => {
    const input = req.body.split('')

    const opedLetters = ['B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'V', 'W', 'Y', 'Z']
    const spokenLetters = ['A', 'E', 'I', 'O', 'U', 'X']

    const outputArray = input.map(letter => {
        const letterToMatch = letter.toUpperCase()

        if (opedLetters.includes(letterToMatch)) return letter + 'op'

        if (spokenLetters.includes(letterToMatch)) {
            if (letterToMatch === 'A') return letter === 'A' ? 'Ay' : 'ay'
            if (letterToMatch === 'E') return letter === 'E' ? 'Ee' : 'ee'
            if (letterToMatch === 'I') return letter === 'I' ? 'Eye' : 'eye'
            if (letterToMatch === 'O') return letter === 'O' ? 'Ow' : 'ow'
            if (letterToMatch === 'U') return letter === 'U' ? 'You' : 'you'
            if (letterToMatch === 'X') return letter === 'X' ? 'Ex' : 'ex'
        }

        return letter
    })

    const output = outputArray.join('')

    res.send({
        data: output
    })
}