import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer'

const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontFamily: 'Helvetica'
  },
  section: {
    marginBottom: 20
  },
  title: {
    fontSize: 24,
    marginBottom: 10
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 5,
    color: '#2563eb'
  },
  text: {
    fontSize: 12,
    marginBottom: 5
  },
  skills: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 5
  },
  skill: {
    padding: '3px 8px',
    backgroundColor: '#eff6ff',
    borderRadius: 4,
    color: '#2563eb'
  }
})

const ResumePDF = ({ selectedSections }) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.title}>Sushant Verma</Text>
          <Text style={styles.text}>Web Developer</Text>
          <Text style={styles.text}>sushantt.verma@gmail.com</Text>
        </View>

        {selectedSections.experience && (
          <View style={styles.section}>
            <Text style={styles.subtitle}>Experience</Text>
            <Text style={styles.text}>Software Developer at Navneet Education Ltd.</Text>
            <Text style={styles.text}>June 2024 - Present</Text>
            {/* Add achievements and other details */}
          </View>
        )}

        {selectedSections.skills && (
          <View style={styles.section}>
            <Text style={styles.subtitle}>Skills</Text>
            <View style={styles.skills}>
              {["React", "Node.js", "MongoDB", "Express", "TypeScript"].map((skill) => (
                <Text key={skill} style={styles.skill}>{skill}</Text>
              ))}
            </View>
          </View>
        )}

        {/* Add other sections based on selectedSections */}
      </Page>
    </Document>
  )
}

export default ResumePDF 