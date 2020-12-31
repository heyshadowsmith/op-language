module.exports = (req, res) => {
    const input = req.body.split('')

    const opedLetters = ['B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'V', 'W', 'Y', 'Z']
    const spokenLetters = ['A', 'E', 'I', 'O', 'U', 'X']

    const outputArray = input.map(letter => {
        const letterToMatch = letter.toUpperCase()

        if (opedLetters.includes(letterToMatch)) return letter + 'op'

        if (spokenLetters.includes(letterToMatch)) {
            if (letterToMatch === 'A') return 'ay'
            if (letterToMatch === 'E') return 'ee'
            if (letterToMatch === 'I') return 'eye'
            if (letterToMatch === 'O') return 'ow'
            if (letterToMatch === 'U') return 'you'
            if (letterToMatch === 'X') return 'ex'
        }

        return letter
    })

    const output = outputArray.join('')

    res.send({
        data: output
    })
}