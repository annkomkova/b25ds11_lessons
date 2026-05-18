parallaxLessons()

function parallaxLessons() {
  const lessons = document.querySelectorAll('.lesson')

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        } else {
          entry.target.classList.remove('visible')
        }
      })
    },
    {
      threshold: 0.2
    }
  )

  lessons.forEach((lesson) => observer.observe(lesson))

  window.addEventListener('scroll', () => {
    lessons.forEach((lesson) => {
      const rect = lesson.getBoundingClientRect()
      const offset = rect.top / window.innerHeight

      lesson.style.transform = `translateY(${offset * 40}px)`
    })
  })
}
